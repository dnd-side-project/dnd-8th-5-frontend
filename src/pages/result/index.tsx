import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
} from './index.styles';

import nobody from '@/assets/images/nobody.png';
import { initialRoomInfoData } from '@/assets/data/initialRoomInfoData';

import Header from '@/components/commons/header';
import SelectBox from '@/components/result/selectBox';
import ResultButton from '@/components/result/button';
import BottomSheet from '@/components/result/bottomSheet';
import SortTimes from '@/components/result/option/sortOption';
import Candidate from '@/components/result/candidate';
import SelectParticipants from '@/components/result/option/participantsOption';

import { RoomTypes } from '@/types/roomInfo';
import { CandidateTimesType } from '@/types/result';

import { ROUTES } from '@/constants/ROUTES';
import { useGetRoomInfo } from '@/queries/room/useGetRoomInfo';
import { useGetCandidateTimes } from '@/queries/result/useGetCandidateTimes';

interface Participants {
  name: string;
  isSelected: boolean;
}

interface QueryStringTypes {
  name: string;
  sort: string;
}

const Result = () => {
  const { roomUUID } = useParams() as { roomUUID: string };

  const [isParticipantsOpened, setIsParticipantsOpened] = useState(false);
  const [filteredParticipants, setFilteredParticipants] = useState<
    Participants[]
  >([]);

  const [isSortOpened, setIsSortOpened] = useState(false);

  const [queryString, setQueryString] = useState<QueryStringTypes>({
    name: '',
    sort: 'fast',
  });

  const handleParticipantOpen = () => {
    setIsParticipantsOpened(!isParticipantsOpened);
  };

  const handleOrderOpen = () => {
    setIsSortOpened(!isSortOpened);
  };

  const [{ title, participants }, setRoom] =
    useState<RoomTypes>(initialRoomInfoData);

  const roomInfo = useGetRoomInfo(roomUUID);

  useEffect(() => {
    if (roomInfo.data) {
      setRoom(roomInfo.data);
    }
  }, [roomInfo.data]);

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

  const { data, refetch } = useGetCandidateTimes(
    roomUUID,
    queryString.sort,
    queryString.name
  );

  useEffect(() => {
    refetch();
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
      <Header pageName={ROUTES.RESULT} title={title} />
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

        {data?.candidateTimes.length === 0 ? (
          <NobodyWrapper>
            <Nobody>
              <NobodyRabbit src={nobody} alt="nobody" />
              <NobodyText>모두가 되는 시간이 없어요</NobodyText>
            </Nobody>
          </NobodyWrapper>
        ) : (
          <>
            {data?.candidateTimes[0].unavailableParticipantNames.length !==
            0 ? (
              <NobodyWrapper>
                <Nobody>
                  <NobodyRabbit src={nobody} alt="nobody" />
                  <NobodyText>모두가 되는 시간이 없어요</NobodyText>
                </Nobody>
              </NobodyWrapper>
            ) : null}

            {data?.candidateTimes.map(
              ({
                date,
                dayOfWeek,
                startTime,
                endTime,
                availableParticipantNames,
                unavailableParticipantNames,
              }: CandidateTimesType) => (
                <Candidate
                  key={`part ${date} ${startTime} ${endTime}`}
                  date={date}
                  dayOfWeek={dayOfWeek}
                  startTime={startTime}
                  endTime={endTime}
                  availableParticipantNames={availableParticipantNames}
                  unavailableParticipantNames={unavailableParticipantNames}
                  count={participants.length}
                  defaultOpen={true}
                />
              )
            )}
          </>
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
