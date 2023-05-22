import { ChangeEvent, useCallback, useEffect, useState } from 'react';
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
  const { roomUuid } = useParams();

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
      const { data } = await API.get(`/api/room/${roomUuid}`);
      setRoom(data);
    };

    const getCurrentRoomInfo = async () => {
      const { data } = await API.get(
        `/api/room/${roomUuid}/available-time/group`
      );

      setCurrentRoomState(data);
    };

    getRoomInfo();
    getCurrentRoomInfo();

    if (!showGuide) {
      throw new Error();
    }
    setAvailbleGuide(JSON.parse(showGuide));
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
    navigate(`/current/${roomUuid}`);
  };

  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    const getPreviousInfo = async () => {
      const { data } = await API.get(
        `/api/room/${roomUuid}/available-time?name=${storedName || userName}`
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
          `/api/room/${roomUuid}/available-time`,
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
            `/api/room/${roomUuid}/available-time`,
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
            `/api/room/${roomUuid}/available-time`,
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

  return (
    <Wrapper>
      <Header pageName="add" title={title} />
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
              <TableWrapper>
                <AddTable
                  selected={selected}
                  setSelected={setSelected}
                  times={times}
                  tablePage={tablePage}
                  selectedMethod={selectedMethod}
                  validDateChunks={validDateChunks}
                />
              </TableWrapper>
              <ScrollbarTrack>
                <ScrollbarThumb />
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
