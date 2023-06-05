import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { availableTimesState } from '../../atoms/availableTimesAtom';
import { selectedMethodState } from '../../atoms/selectedMethodAtom';
import { availableGuideState } from '../../atoms/availableGuideAtoms';

import addPrevDisable from '../../assets/icons/addPrevDisable.png';
import addNextDisable from '../../assets/icons/addNextDisable.png';
import addPrevActive from '../../assets/icons/addPrevActive.png';
import addNextActive from '../../assets/icons/addNextActive.png';

import guideIcon from '../../assets/icons/guide.png';
import guideHandle from '../../assets/icons/guideHandle.png';
import closeIcon from '../../assets/icons/close.png';

import { getChunks } from '../../utils/getChunks';
import { getValidDates } from '../../utils/getValidDates';
import { getDateRange } from '../../utils/getDateRange';

import {
  Body,
  ButtonWrapper,
  Main,
  MoveButton,
  ScrollbarThumb,
  ScrollbarTrack,
  TableWrapper,
  Title,
  TitleWrapper,
  Guide,
  Wrapper,
  GuideIcon,
  GuideHandleIcon,
  CloseButton,
} from './AddTime.styles';
import Header from '../../components/header/Header';
import BottomButton from '../../components/bottomButton/BottomButton';
import AddTable from '../../components/addTable/AddTable';

import AddToggle from '../../components/addToggle/AddToggle';
import { RoomTypes } from '../../types/roomInfo';
import { API } from '../../utils/API';
import { useNavigate, useParams } from 'react-router-dom';
import AddCalendar from '../../components/addCalendar/AddCalendar';
import { getRange } from '../../utils/getRange';
import { getTimeArray } from '../../utils/getTimeArray';
import _ from 'lodash';
import { userNameState } from '../../atoms/userNameAtoms';
import { getThreeChunks } from '../../utils/getThreeChunks';

const AddTime = () => {
  const { roomUUID } = useParams();

  const [currentRoomState, setCurrentRoomState] = useState<any>([]);
  const [room, setRoom] = useState<RoomTypes>({
    title: '',
    deadLine: null,
    headCount: null,
    participants: [''],
    dates: [''],
    startTime: null,
    endTime: null,
  });

  const [tablePage, setTablePage] = useState(0);
  const [isPageMoved, setIsPageMoved] = useState(false);

  const [userName, setUserName] = useRecoilState(userNameState);
  const [availableGuide, setAvailbleGuide] =
    useRecoilState(availableGuideState);

  const { title, dates, startTime, endTime } = room;

  const [selectedMethod, setSelectedMethod] =
    useRecoilState(selectedMethodState);
  const [availableTimes, setAvailableTimes] =
    useRecoilState(availableTimesState);

  const validDateChunks = getChunks(
    getValidDates(getThreeChunks(dates.sort()))
  );

  const storedName = localStorage.getItem('name');
  const showGuide = localStorage.getItem('availableShowGuide');

  useEffect(() => {
    const getRoomInfo = async () => {
      const { data } = await API.get(`/api/room/${roomUUID}`);
      setRoom(data);
    };

    const getCurrentRoomInfo = async () => {
      const { data } = await API.get(
        `/api/room/${roomUUID}/available-time/group`
      );
      setCurrentRoomState(data);
    };

    getRoomInfo();
    getCurrentRoomInfo();

    setAvailbleGuide(JSON.parse(showGuide as string));
  }, []);

  const handlePrevButtonClick = () => {
    if (tablePage !== 0) {
      setTablePage(tablePage - 1);
    }

    setIsPageMoved(true);
  };

  const handleNextButtonClick = () => {
    if (tablePage !== validDateChunks.length - 1) {
      setTablePage(tablePage + 1);
    }

    setIsPageMoved(true);
  };

  useEffect(() => {
    availableTimes.map(
      (time: string) =>
        document.getElementById(`${time}`) &&
        document.getElementById(`${time}`)?.classList.add('selected')
    );

    setIsPageMoved(false);
  }, [isPageMoved]);

  const navigate = useNavigate();
  const goToCurrent = () => {
    navigate(`/current/${roomUUID}`);
  };

  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const getPreviousInfo = async () => {
      const { data } = await API.get(
        `/api/room/${roomUUID}/available-time?name=${storedName || userName}`
      );
      setSelected(data.availableDateTimes);
    };

    getPreviousInfo();
  }, []);

  const handleApplyClick = () => {
    if (selectedMethod === 'possible') {
      const payload =
        startTime === null || endTime === null
          ? {
              name: storedName || userName,
              hasTime: false,
              availableDateTimes: [...selected],
            }
          : {
              name: storedName || userName,
              hasTime: true,
              availableDateTimes: [...selected],
            };

      const putAvailableTime = async () => {
        await API.put(
          `/api/room/${roomUUID}/available-time`,
          JSON.stringify(payload)
        );
      };

      putAvailableTime();
    }

    if (selectedMethod === 'impossible') {
      if (startTime === null || endTime === null) {
        const newDates = dates.map((date) => `${date} 00:00`);
        const filteredTime = selected && _.difference(newDates, selected);

        const payload = {
          name: storedName || userName,
          hasTime: false,
          availableDateTimes: filteredTime,
        };

        const putAvailableTime = async () => {
          await API.put(
            `/api/room/${roomUUID}/available-time`,
            JSON.stringify(payload)
          );
        };

        putAvailableTime();
      } else {
        const filteredTime = _.difference(allTimeRange, selected);

        const payload = {
          name: storedName || userName,
          hasTime: true,
          availableDateTimes: filteredTime,
        };

        const putAvailableTime = async () => {
          await API.put(
            `/api/room/${roomUUID}/available-time`,
            JSON.stringify(payload)
          );
        };

        putAvailableTime();
      }
    }

    goToCurrent();
  };

  const handleGuideCloseClick = useCallback(() => {
    localStorage.setItem('availableShowGuide', 'false');
    setAvailbleGuide(false);
    return;
  }, [availableGuide, showGuide]);

  const [times, setTimes] = useState<number[]>([]);

  useEffect(() => {
    if (startTime && endTime) {
      setTimes(
        getRange(parseInt(startTime.slice(0, 2)), parseInt(endTime.slice(0, 2)))
      );
    }
  }, [startTime, endTime]);

  const validDates = getValidDates(
    getDateRange(dates[0], dates[dates.length - 1])
  );

  const timeDetail = getTimeArray(times);

  const allTimeRange = validDates
    .map(({ date, isValidDate }) =>
      timeDetail.map((time) => isValidDate && `${date} ${time}`)
    )
    .reduce((acc, cur) => acc.concat(cur), [])
    .filter(Boolean);

  // 스크롤바
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const [offsetY, setOffsetY] = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const track = trackRef.current as HTMLDivElement;
    const thumb = thumbRef.current as HTMLDivElement;

    if (!thumb || !track) return;

    const shiftY = e.clientY - thumb.getBoundingClientRect().top;

    const onMouseMove = (e: MouseEvent) => {
      const newTop = e.clientY - shiftY - track.getBoundingClientRect().top;
      const bottomEdge = track.offsetHeight - thumb.offsetHeight;

      const updatedOffsetY = Math.min(Math.max(0, newTop), bottomEdge);
      setOffsetY(updatedOffsetY);
    };

    const onMouseUp = () => {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const track = trackRef.current as HTMLDivElement;
    const thumb = thumbRef.current as HTMLDivElement;

    if (!thumb || !track) return;

    const shiftY = e.touches[0].clientY - thumb.getBoundingClientRect().top;

    const onTouchMove = (e: TouchEvent) => {
      const newTop =
        e.touches[0].clientY - shiftY - track.getBoundingClientRect().top;
      const bottomEdge = track.offsetHeight - thumb.offsetHeight;

      const updatedOffsetY = Math.min(Math.max(0, newTop), bottomEdge);
      setOffsetY(updatedOffsetY);
    };

    const onTouchEnd = () => {
      document.removeEventListener('touchend', onTouchEnd);
      document.removeEventListener('touchmove', onTouchMove);
    };

    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    const contentWrapper = contentWrapperRef.current as HTMLDivElement;
    const content = contentRef.current as HTMLDivElement;
    const track = trackRef.current as HTMLDivElement;
    const thumb = thumbRef.current as HTMLDivElement;

    if (contentWrapper && content && track) {
      const maxScrollTop =
        contentWrapper.scrollHeight - contentWrapper.clientHeight;
      const ratio = offsetY / (track.scrollHeight - thumb.scrollHeight);

      const newScrollTop = ratio * maxScrollTop;

      contentWrapper.scrollTop = newScrollTop;
    }
  }, [offsetY, trackRef, contentRef]);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current as HTMLDivElement;

    const preventPullToRefresh = (e: any) => {
      e.preventDefault();
    };

    if (wrapper) {
      wrapper.addEventListener('touchmove', preventPullToRefresh, {
        passive: false,
      });
    }

    return () => {
      wrapper?.removeEventListener('touchmove', preventPullToRefresh);
    };
  }, [wrapperRef.current]);

  return (
    <Wrapper>
      <Header pageName="addTime" title={title} />
      <Body>
        <TitleWrapper>
          <Title>{`${storedName || userName} 님의 일정을`}</Title>
        </TitleWrapper>
        <TitleWrapper>
          <AddToggle setSelected={setSelected} />
          <Title>시간으로 선택해 주세요</Title>
        </TitleWrapper>

        <Main>
          {startTime !== null && endTime !== null ? (
            <>
              <ButtonWrapper>
                <MoveButton
                  src={tablePage === 0 ? addPrevDisable : addPrevActive}
                  alt="Prev Button"
                  onClick={handlePrevButtonClick}
                />
                <MoveButton
                  src={
                    tablePage !== validDateChunks.length - 1
                      ? addNextActive
                      : addNextDisable
                  }
                  alt="Next Button"
                  onClick={handleNextButtonClick}
                />
              </ButtonWrapper>
              <TableWrapper ref={contentWrapperRef}>
                <AddTable
                  contentRef={contentRef}
                  selected={selected}
                  setSelected={setSelected}
                  times={times}
                  tablePage={tablePage}
                  selectedMethod={selectedMethod}
                  validDateChunks={validDateChunks}
                />
              </TableWrapper>
              <ScrollbarTrack ref={trackRef}>
                <ScrollbarThumb
                  ref={thumbRef}
                  offsetY={offsetY}
                  onMouseDown={handleMouseDown}
                  onDragStart={handleDragStart}
                  onTouchStart={handleTouchStart}
                />
              </ScrollbarTrack>
            </>
          ) : (
            <TableWrapper>
              <AddCalendar
                dates={dates}
                selected={selected}
                setSelected={setSelected}
                selectedMethod={selectedMethod}
              />
            </TableWrapper>
          )}
        </Main>
        <BottomButton
          onClick={handleApplyClick}
          navigate={goToCurrent}
          text="등록하기"
          isActivated={true}
        />
      </Body>
      {availableGuide && (
        <Guide>
          <GuideIcon src={guideIcon} />
          <GuideHandleIcon src={guideHandle} />
          <CloseButton src={closeIcon} onClick={handleGuideCloseClick} />
        </Guide>
      )}
    </Wrapper>
  );
};

export default AddTime;
