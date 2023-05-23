import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { availableTimesState } from '../../atoms/availableTimesAtom';
import { selectedMethodState } from '../../atoms/selectedMethodAtom';

import addPrev from '../../assets/icons/addPrev.png';
import addNext from '../../assets/icons/addNext.png';
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

  const [userName, setUserName] = useRecoilState(userNameState);
  const storedName = localStorage.getItem('name');

  const showGuide = localStorage.getItem('availableShowGuide');
  const [availableShowGuide, setAvailableShowGuide] = useState<boolean>(
    Boolean(showGuide)
  );

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
  }, []);

  const { title, dates, startTime, endTime } = room;

  const [tablePage, setTablePage] = useState(0);
  const [isPageMoved, setIsPageMoved] = useState(false);

  const [selectedMethod, setSelectedMethod] =
    useRecoilState(selectedMethodState);
  const [availableTimes, setAvailableTimes] =
    useRecoilState(availableTimesState);

  const validDateChunks = getChunks(
    getValidDates(getThreeChunks(dates.sort()))
  );

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

  const handleGuideCloseClick = () => {
    localStorage.setItem('availableShowGuide', 'true');
    setAvailableShowGuide(true);
    return;
  };

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

  /* scrollbar */
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollbarTrackRef = useRef<HTMLDivElement>(null);
  const scrollbarThumbRef = useRef<HTMLDivElement>(null);

  const [topPosition, setTopPosition] = useState(0);

  const track = scrollbarTrackRef.current as HTMLDivElement;
  const thumb = scrollbarThumbRef.current as HTMLDivElement;

  const [dragMethod, setDragMethod] = useState<string>('touch');

  const handleMouseDown = (e: any) => {
    e.preventDefault();
    setDragMethod('mouse');

    const shiftY = e.clientY - thumb.getBoundingClientRect().top;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event: MouseEvent) {
      let newTop = event.clientY - shiftY - track.getBoundingClientRect().top;

      if (newTop < 0) {
        newTop = 0;
      }
      const bottomEdge = track.offsetHeight - thumb.offsetHeight;
      if (newTop > bottomEdge) {
        newTop = bottomEdge;
      }

      setTopPosition(newTop);
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  };

  const [startY, setStartY] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleTouchStart = (e: any) => {
    setDragMethod('touch');

    const touch = e.touches && e.touches[0];
    if (!touch) return;

    const startY = touch.clientY;
    setStartY(startY);

    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchMove = (e: any) => {
    const touch = e.touches && e.touches[0];
    if (!touch || !track) return;

    const currentY = touch.clientY;
    const offsetY = currentY - startY;
    // console.log(currentY, startY);

    setOffsetY(offsetY);

    const sliderHeight = track.offsetHeight;
    const thumbHeight = thumb.offsetHeight;
    const maxHeight = sliderHeight - thumbHeight;

    let newTop = offsetY;

    if (newTop < 0) {
      newTop = 0;
    } else if (newTop > maxHeight) {
      newTop = maxHeight;
    }

    setOffsetY(newTop);
  };

  const handleTouchEnd = () => {
    document.removeEventListener('touchend', handleTouchEnd);
    document.removeEventListener('touchmove', handleTouchMove);
  };

  useEffect(() => {
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
  }, []);

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
                  src={addPrev}
                  alt="Prev Button"
                  onClick={handlePrevButtonClick}
                />
                <MoveButton
                  src={addNext}
                  alt="Next Button"
                  onClick={handleNextButtonClick}
                />
              </ButtonWrapper>
              <TableWrapper>
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
              <ScrollbarTrack ref={scrollbarTrackRef}>
                <ScrollbarThumb
                  ref={scrollbarThumbRef}
                  style={
                    dragMethod === 'touch'
                      ? { top: `${offsetY}px` }
                      : { top: `${topPosition}px` }
                  }
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                />
              </ScrollbarTrack>
            </>
          ) : (
            <TableWrapper>
              <AddCalendar
                dates={dates}
                selected={selected}
                setSelected={setSelected}
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
      {!availableShowGuide && (
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
