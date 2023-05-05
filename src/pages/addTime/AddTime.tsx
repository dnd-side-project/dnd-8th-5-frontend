import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { availableTimesState } from '../../atoms/availableTimesAtom';
import { selectedMethodState } from '../../atoms/selectedMethodAtom';

import addPrev from '../../assets/icons/addPrev.png';
import addNext from '../../assets/icons/addNext.png';

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
  Wrapper,
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

  const [userName, setUserName] = useRecoilState(userNameState);
  const storedName = localStorage.getItem('name');

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
  }, []);

  const { title, dates, startTime, endTime } = room;

  const [tablePage, setTablePage] = useState(0);
  const [isPageMoved, setIsPageMoved] = useState(false);

  const [selectedMethod, setSelectedMethod] =
    useRecoilState(selectedMethodState);
  const [availableTimes, setAvailableTimes] =
    useRecoilState(availableTimesState);

  const handleSelectMethod = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMethod(e.target.value);
  };

  const validDateChunks = getChunks(
    getValidDates(getDateRange(dates[0], dates[dates.length - 1]))
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
  const goToResult = () => {
    navigate(`/result/${roomUuid}`);
  };

  const [selected, setSelected] = useState<string[]>([]);
  console.log(selected);

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
      console.log('pay: ', payload);
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
          hasTime: false,
          availableDateTimes: filteredTime,
        };

        console.dir('설마', payload);

        const putAvailableTime = async () => {
          await API.put(
            `/api/room/${roomUuid}/available-time`,
            JSON.stringify(payload)
          );
        };

        putAvailableTime();
      }
    }

    goToResult();
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
          navigate={goToResult}
          text="등록하기"
          isActivated={true}
        />
      </Body>
    </Wrapper>
  );
};

export default AddTime;
