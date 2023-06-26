import Header from '../../components/header/Header';
import SelectBox from '../../components/selectBox/SelectBox';

import nobody from '../../assets/images/nobody.png';
import Accordion from '../../components/accordion/Accordion';
import { useEffect, useState } from 'react';
import ResultButton from '../../components/resultButton/ResultButton';
import Popup from '../../components/popup/Popup';
import BottomSheet from '../../components/bottomSheet/BottomSheet';

import {
  Body,
  // ConfirmButton,
  Nobody,
  NobodyRabbit,
  NobodyText,
  NobodyWrapper,
  SelectWrapper,
  TimeWrapper,
  Title,
  TitleWrapper,
  Wrapper,
} from './Result.styles';
import { useRecoilState } from 'recoil';
import { roomState } from '../../atoms/roomAtoms';
import { useParams } from 'react-router-dom';
import { API } from '../../utils/API';
import SelectParticipants from '../../components/resultOption/SelectParticipants';
import SortTimes from '../../components/resultOption/SortTimes';

interface FilteredParticipantsTypes {
  name: string;
  isSelected: boolean;
}

const Result = () => {
  const { roomUUID } = useParams();

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isParticipantOpened, setIsParticipantOpened] = useState(false);
  const [isSortOpened, setIsSortOpened] = useState(false);

  const [selectedTimeId, setSelectedTimeId] = useState('');
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const [filteredParticipants, setFilteredParticipants] = useState<
    FilteredParticipantsTypes[]
  >([]);

  const [nameQS, setNameQS] = useState<string>('');
  const [sortedQS, setSortedQS] = useState<string>('fast');

  // const handleConfirmButtonClick = (e: any) => {
  //   setIsPopupOpened(true);
  //   setSelectedTimeId(e.target.id);
  // };

  const handleParticipantOpen = () => {
    setIsParticipantOpened(!isParticipantOpened);
  };

  const handleOrderOpen = () => {
    setIsSortOpened(!isSortOpened);
  };

  const [room, setRoom] = useRecoilState(roomState);
  const [candidateTimes, setCandidateTimes] = useState({
    candidateTimes: [
      {
        id: 0,
        date: '',
        dayOfWeek: '',
        startTime: '',
        endTime: '',
        participantNames: [],
        isConfirmed: false,
      },
    ],
  });

  useEffect(() => {
    const getRoomInfo = async () => {
      const { data } = await API.get(`/api/room/${roomUUID}`);
      setRoom(data);
    };

    getRoomInfo();
  }, []);

  useEffect(() => {
    const getCandidateTimes = async () => {
      const { data } = await API.get(
        `/api/room/${roomUUID}/adjustment-result?sorted=${sortedQS}&${nameQS}`
      );

      setCandidateTimes(data);
    };

    getCandidateTimes();
  }, [sortedQS, nameQS]);

  const { title, participants, headCount } = room;

  const participantsList: any = participants.map(
    (participant: string) =>
      participant && { name: participant, isSelected: false }
  );

  return (
    <Wrapper>
      <Header pageName="result" title={title} />
      <Body>
        <TitleWrapper>
          <Title isNumber={false}>현재까지</Title>
          <Title isNumber={true}>{participants.length}</Title>
          <Title isNumber={false}>명의</Title>
        </TitleWrapper>
        <TitleWrapper>
          <Title isNumber={false}>약속 조율 결과예요</Title>
        </TitleWrapper>
        <SelectWrapper>
          <SelectBox
            text={
              filteredParticipants.length === 0 ||
              filteredParticipants.length == participantsList.length
                ? '전체 참여자'
                : filteredParticipants.length === 1
                ? `${filteredParticipants[0].name}`
                : `${filteredParticipants[0].name} 외 ${
                    filteredParticipants.length - 1
                  }명`
            }
            handleClick={handleParticipantOpen}
          />
          <SelectBox
            text={sortedQS === 'fast' ? '빠른 시간 순' : '오래 만날 수 있는 순'}
            handleClick={handleOrderOpen}
          />
        </SelectWrapper>

        {participants.length === headCount ? (
          <>
            {candidateTimes.candidateTimes.map(
              ({ id, date, dayOfWeek, startTime, endTime, isConfirmed }) => (
                <TimeWrapper
                  key={`all ${date} ${dayOfWeek} ${startTime} ${endTime}`}
                  isConfirmed={isConfirmed}
                >
                  {startTime && endTime
                    ? `${date.slice(5, 7)}월 ${date.slice(
                        8,
                        10
                      )} (${dayOfWeek}) ${startTime} ~ ${endTime}`
                    : `${date.slice(5, 7)}월 ${date.slice(
                        8,
                        10
                      )} (${dayOfWeek})`}
                  {/* {isConfirmed ? (
                    <ConfirmButton
                      id={`${id}`}
                      isConfirmed={isConfirmed}
                      onClick={handleConfirmButtonClick}
                    >
                      확정 취소
                    </ConfirmButton>
                  ) : (
                    <ConfirmButton
                      id={`${id}`}
                      isConfirmed={isConfirmed}
                      onClick={handleConfirmButtonClick}
                    >
                      확정
                    </ConfirmButton>
                  )} */}
                </TimeWrapper>
              )
            )}
          </>
        ) : (
          <>
            <NobodyWrapper>
              <Nobody>
                <NobodyRabbit src={nobody} alt="nobody" />
                <NobodyText>모두가 되는 시간이 없어요</NobodyText>
              </Nobody>
            </NobodyWrapper>
            {candidateTimes.candidateTimes.map(
              ({ date, dayOfWeek, startTime, endTime, participantNames }) => (
                <Accordion
                  key={`part ${date} ${startTime} ${endTime}`}
                  date={date}
                  dayOfWeek={dayOfWeek}
                  startTime={startTime}
                  endTime={endTime}
                  participantNames={participantNames}
                  count={participants.length}
                />
              )
            )}
          </>
        )}

        <>
          {candidateTimes.candidateTimes.map(
            ({ id, date, dayOfWeek, startTime, endTime, isConfirmed }) => {
              <TimeWrapper
                key={`all ${date} ${dayOfWeek} ${startTime} ${endTime}`}
                isConfirmed={isConfirmed}
              >
                {date}
                {`${date.slice(0, 2)}월 ${date.slice(
                  3,
                  5
                )} (${dayOfWeek}) ${startTime} ~ ${endTime}`}
                {/* {isConfirmed ? (
                  <ConfirmButton
                    isConfirmed={isConfirmed}
                    onClick={handleConfirmButtonClick}
                  >
                    확정 취소
                  </ConfirmButton>
                ) : (
                  <ConfirmButton
                    id={`${id}`}
                    isConfirmed={isConfirmed}
                    onClick={handleConfirmButtonClick}
                  >
                    확정
                  </ConfirmButton>
                )} */}
              </TimeWrapper>;
            }
          )}
        </>
      </Body>

      <ResultButton />

      {isPopupOpened && (
        <Popup
          selectedTimeId={selectedTimeId}
          setIsPopupOpened={setIsPopupOpened}
          setIsConfirmed={setIsConfirmed}
        />
      )}
      {isParticipantOpened && (
        <BottomSheet
          setIsBottomSheetOpened={setIsParticipantOpened}
          title="참여자"
          children={
            <SelectParticipants
              setFilteredParticipants={setFilteredParticipants}
              participantsList={participantsList}
              setNameQS={setNameQS}
              selectedList={selectedList}
              setSelectedList={setSelectedList}
              setIsParticipantOpened={setIsParticipantOpened}
            />
          }
        />
      )}
      {isSortOpened && (
        <BottomSheet
          setIsBottomSheetOpened={setIsSortOpened}
          title="정렬"
          children={
            <SortTimes
              sortedQS={sortedQS}
              setSortedQS={setSortedQS}
              setIsSortOpened={setIsSortOpened}
            />
          }
        />
      )}
    </Wrapper>
  );
};

export default Result;
