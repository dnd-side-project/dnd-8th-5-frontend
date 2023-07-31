import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/header/Header';
import SelectBox from '../../components/selectBox/SelectBox';
import ResultButton from '../../components/resultButton/ResultButton';
import BottomSheet from '../../components/bottomSheet/BottomSheet';
import SelectParticipants from '../../components/option/participantsOption/participantsOption';
import SortTimes from '../../components/option/sortOption/SortTimes';
import Candidate from '../../components/candidate/Candidate';

import {
  Body,
  Nobody,
  NobodyRabbit,
  NobodyText,
  NobodyWrapper,
  SelectWrapper,
  Title,
  TitleWrapper,
  Wrapper,
} from './Result.styles';

import nobody from '../../assets/images/nobody.png';

import { API } from '../../utils/API';
import { RoomTypes } from '../../types/roomInfo';

interface Participants {
  name: string;
  isSelected: boolean;
}

const Result = () => {
  const { roomUUID } = useParams();

  const [isParticipantsOpened, setIsParticipantsOpened] = useState(false);
  const [filteredParticipants, setFilteredParticipants] = useState<
    Participants[]
  >([]);

  const [isSortOpened, setIsSortOpened] = useState(false);

  const [queryString, setQueryString] = useState<{
    name: string;
    sort: string;
  }>({
    name: '',
    sort: 'fast',
  });

  const handleParticipantOpen = () => {
    setIsParticipantsOpened(!isParticipantsOpened);
  };

  const handleOrderOpen = () => {
    setIsSortOpened(!isSortOpened);
  };

  const [room, setRoom] = useState<RoomTypes>({
    title: '',
    deadLine: '',
    headCount: 0,
    participants: [''],
    dates: [''],
    startTime: '',
    endTime: '',
  });

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

  const { title, participants, headCount } = room;

  const [participantsList, setParticipantsList] = useState<Participants[]>([]);

  useEffect(() => {
    const newList = participants.map((participant: string) => ({
      name: participant,
      isSelected: true,
    }));

    setParticipantsList(newList);
  }, [participants]);

  useEffect(() => {
    const selected = participantsList.filter(
      ({ isSelected }: { isSelected: boolean }) => isSelected === true
    );

    setFilteredParticipants(selected);

    const qs = selected.map(({ name }: { name: string }) => `name=${name}&`);
    setQueryString({ ...queryString, name: qs.join('') });
  }, [participantsList]);

  useEffect(() => {
    const getCandidateTimes = async () => {
      const { data } = await API.get(
        `/api/room/${roomUUID}/adjustment-result?sorted=${queryString.sort}&${queryString.name}`
      );

      setCandidateTimes(data);
    };

    getCandidateTimes();
  }, [queryString]);

  const getFilteredName = () => {
    const selectedCount = filteredParticipants.length;

    if (selectedCount === 0 || selectedCount === participantsList.length) {
      return '전체 참여자';
    } else if (selectedCount === 1) {
      return `${filteredParticipants[0].name}`;
    } else return `${filteredParticipants[0].name} 외 ${selectedCount - 1}명`;
  };

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
            text={getFilteredName()}
            handleClick={handleParticipantOpen}
          />
          <SelectBox
            text={
              queryString.sort === 'fast'
                ? '빠른 시간 순'
                : '오래 만날 수 있는 순'
            }
            handleClick={handleOrderOpen}
          />
        </SelectWrapper>

        {participants.length !==
        candidateTimes.candidateTimes[0].participantNames.length ? (
          <NobodyWrapper>
            <Nobody>
              <NobodyRabbit src={nobody} alt="nobody" />
              <NobodyText>모두가 되는 시간이 없어요</NobodyText>
            </Nobody>
          </NobodyWrapper>
        ) : null}

        {candidateTimes.candidateTimes.map(
          ({ date, dayOfWeek, startTime, endTime, participantNames }) => (
            <Candidate
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
      </Body>

      <ResultButton />

      {isParticipantsOpened && (
        <BottomSheet
          setIsBottomSheetOpened={setIsParticipantsOpened}
          title="참여자"
          children={
            <SelectParticipants
              setIsParticipantOpened={setIsParticipantsOpened}
              participantsList={participantsList}
              setParticipantsList={setParticipantsList}
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
              queryString={queryString}
              setQueryString={setQueryString}
              setIsSortOpened={setIsSortOpened}
            />
          }
        />
      )}
    </Wrapper>
  );
};

export default Result;
