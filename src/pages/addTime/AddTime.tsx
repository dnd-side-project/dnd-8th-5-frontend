import { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import _ from 'lodash';

import { selectedMethodState } from '../../atoms/selectedMethodAtom';
import { availableGuideState } from '../../atoms/availableGuideAtoms';

import addPrevDisable from '../../assets/icons/addPrevDisable.png';
import addNextDisable from '../../assets/icons/addNextDisable.png';
import addPrevActive from '../../assets/icons/addPrevActive.png';
import addNextActive from '../../assets/icons/addNextActive.png';

import guideIcon from '../../assets/icons/guide.png';
import guideHandle from '../../assets/icons/guideHandle.png';
import closeIcon from '../../assets/icons/close.png';

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
  CalendarWrapper,
} from './AddTime.styles';
import Header from '../../components/header/Header';
import BottomButton from '../../components/bottomButton/BottomButton';
import AddTable from '../../components/addTable/AddTable';
import AddCalendar from '../../components/addCalendar/AddCalendar';

import AddToggle from '../../components/addToggle/AddToggle';
import { RoomTypes } from '../../types/roomInfo';
import { API } from '../../utils/API';
import { useNavigate, useParams } from 'react-router-dom';
import { getRange } from '../../utils/getRange';
import { getAddTimeTableInfo } from '../../utils/getAddTimeTableInfo';
import { useScroll } from '../../hooks/useScroll';
import { getValidDates } from '../../utils/getValidDates';
import { getDateRange } from '../../utils/getDateRange';
import { getTimeArray } from '../../utils/getTimeArray';

interface TableSelectedTypes {
  [key: number]: string[];
}

const AddTime = () => {
  const { roomUUID } = useParams();
  const navigate = useNavigate();

  const wrapperRef = useRef<HTMLDivElement>(null);

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

  const { title, dates, startTime, endTime } = room;

  const isTableView = startTime !== null && endTime !== null ? true : false;
  const [tablePage, setTablePage] = useState(0);
  const [availableGuide, setAvailbleGuide] =
    useRecoilState(availableGuideState);
  const [selectedMethod, setSelectedMethod] =
    useRecoilState(selectedMethodState);
  const [selected, setSelected] = useState<string[]>([]);
  const [tableSelected, setTableSelected] = useState<TableSelectedTypes>({});

  const [previousSelectedTimes, setPreviousSelectedTimes] = useState<string[]>(
    []
  );

  const storedName = localStorage.getItem('name');
  const userName = localStorage.getItem('userName');
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

    const getPreviousSelectedTimes = async () => {
      const { data } = await API.get(
        `/api/room/${roomUUID}/available-time?name=${userName}`
      );
      setPreviousSelectedTimes(data.availableDateTimes);
    };

    getRoomInfo();
    getCurrentRoomInfo();
    getPreviousSelectedTimes();

    setAvailbleGuide(JSON.parse(showGuide as string));
  }, []);

  const validDateChunks = getAddTimeTableInfo(dates);

  useEffect(() => {
    const newObj: TableSelectedTypes = {};

    previousSelectedTimes.forEach((time) => {
      validDateChunks.map((chunk, index) => {
        chunk.map((date) => {
          if (date.date === time.slice(0, 10)) {
            if (newObj[index] === undefined) {
              newObj[index] = [time];
            } else {
              newObj[index].push(time);
            }
          }
        });
      });
    });

    setTableSelected(newObj);
  }, [previousSelectedTimes]);

  const [times, setTimes] = useState<number[]>([]);

  useEffect(() => {
    if (startTime && endTime && wrapperRef.current) {
      setTimes(
        getRange(parseInt(startTime.slice(0, 2)), parseInt(endTime.slice(0, 2)))
      );

      document.body.style.overflow = 'hidden';
      wrapperRef.current.style.overflow = 'hidden';
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

  const handlePrevButtonClick = () => {
    if (tablePage !== 0) {
      setTablePage(tablePage - 1);
    }
  };

  const handleNextButtonClick = () => {
    if (tablePage !== validDateChunks.length - 1) {
      setTablePage(tablePage + 1);
    }
  };

  const goToCurrent = () => {
    document.body.style.overflow = '';
    (wrapperRef.current as HTMLDivElement).style.overflow = 'auto';

    navigate(`/current/${roomUUID}`);
  };

  const getPayload = async () => {
    if (selectedMethod === 'possible') {
      const payload = isTableView
        ? {
            name: userName,
            hasTime: true,
            availableDateTimes: Object.values(tableSelected).flat(),
          }
        : {
            name: userName,
            hasTime: false,
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
      if (isTableView) {
        const filteredTime = _.difference(
          allTimeRange,
          Object.values(tableSelected).flat()
        );

        const payload = {
          name: userName,
          hasTime: true,
          availableDateTimes: filteredTime,
        };

        console.log('젭알', filteredTime);

        const putAvailableTime = async () => {
          await API.put(
            `/api/room/${roomUUID}/available-time`,
            JSON.stringify(payload)
          );
        };

        putAvailableTime();
      } else {
        const newDates = dates.map((date) => `${date} 00:00`);
        const filteredTime = selected && _.difference(newDates, selected);

        const payload = {
          name: userName,
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
      }
    }
  };

  const handleApplyClick = () => {
    getPayload();
    goToCurrent();

    // window.location.reload();
  };

  const handleGuideCloseClick = useCallback(() => {
    localStorage.setItem('availableShowGuide', 'false');
    setAvailbleGuide(false);
    return;
  }, [availableGuide, showGuide]);

  const {
    contentWrapperRef,
    contentRef,
    trackRef,
    thumbRef,
    offsetY,
    handleMouseDown,
    handleTouchStart,
    handleDragStart,
  } = useScroll();

  return (
    <Wrapper ref={wrapperRef}>
      <Header pageName="addTime" title={title} />
      <Body>
        <TitleWrapper>
          <Title>{`${userName} 님의 일정을`}</Title>
        </TitleWrapper>
        <TitleWrapper>
          <AddToggle
            isTableView={isTableView}
            setTableSelected={setTableSelected}
            setSelected={setSelected}
          />
          <Title>시간으로 선택해 주세요</Title>
        </TitleWrapper>

        <Main>
          {isTableView ? (
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
                  tableSelected={tableSelected}
                  setTableSelected={setTableSelected}
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
            <CalendarWrapper>
              <AddCalendar
                dates={dates}
                selected={selected}
                setSelected={setSelected}
                selectedMethod={selectedMethod}
              />
            </CalendarWrapper>
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
