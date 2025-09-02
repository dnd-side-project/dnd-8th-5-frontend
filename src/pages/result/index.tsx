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

import { Participant, RoomTypes } from '@/types/roomInfo';
import { CandidateTimesType } from '@/types/result';

import { ROUTES } from '@/constants/ROUTES';
import { useGetRoomInfo } from '@/queries/room/useGetRoomInfo';
import { useGetCandidateTimes } from '@/queries/result/useGetCandidateTimes';
import { Layout } from '@/components/commons/layout';
import { Helmet } from 'react-helmet-async';
import { UpdateNote } from '@/components/commons/updateNote';

interface Participants {
  name: string;
  isSelected: boolean;
}

export interface FilterTypes {
  names: string[];
  sort: 'fast' | 'long';
}

const Result = () => {
  const { roomUUID } = useParams() as { roomUUID: string };

  const [isParticipantsOpened, setIsParticipantsOpened] = useState(false);
  const [filteredParticipants, setFilteredParticipants] = useState<
    Participants[]
  >([]);

  const [isSortOpened, setIsSortOpened] = useState(false);

  const [filter, setFilter] = useState<FilterTypes>({
    names: [],
    sort: 'fast',
  });

  const handleParticipantOpen = () => {
    setIsParticipantsOpened(!isParticipantsOpened);
  };

  const handleOrderOpen = () => {
    setIsSortOpened(!isSortOpened);
  };

  const { data: roomInfo } = useGetRoomInfo(roomUUID);

  const [participantsList, setParticipantsList] = useState<Participants[]>([]);

  useEffect(() => {
    if (!roomInfo) return;

    const newList = roomInfo.participants.map((participant: Participant) => ({
      name: participant.name,
      isSelected: true,
    }));

    setParticipantsList(newList);
  }, [roomInfo?.participants]);

  useEffect(() => {
    const selected = participantsList.filter(
      ({ isSelected }: { isSelected: boolean }) => isSelected === true
    );

    setFilteredParticipants(selected);
    setFilter({ ...filter, names: selected.map((s) => s.name) });
  }, [participantsList]);

  const { data, refetch } = useGetCandidateTimes(
    roomUUID,
    filter.sort,
    filter.names
  );

  useEffect(() => {
    refetch();
  }, [filter]);

  const getFilteredName = () => {
    const selectedCount = filteredParticipants.length;

    if (selectedCount === 0 || selectedCount === participantsList.length) {
      return '전체 참여자';
    } else if (selectedCount === 1) {
      return `${filteredParticipants[0].name}`;
    } else return `${filteredParticipants[0].name} 외 ${selectedCount - 1}명`;
  };

  const isFiltered = filteredParticipants.length !== participantsList.length;

  if (!roomInfo) return null;
  return (
    <>
      <Helmet>
        <title>{`${roomInfo.title} - 우선 순위 보기`}</title>
        <meta name="title" content={`${roomInfo.title} - 우선 순위 보기`} />
        <meta
          name="description"
          content="쉽고 빠른 약속시간 정하기, 모두의 시간"
        />
      </Helmet>
      <Layout>
        <Wrapper>
          <Header
            pageName={ROUTES.RESULT}
            roomId={roomUUID}
            title={roomInfo.title}
          />
          <Body>
            <UpdateNote />
            <TitleWrapper>
              <Title isNumber={false}>현재까지</Title>
              <Title isNumber={true}>{roomInfo.participants.length}</Title>
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
                  filter.sort === 'fast'
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
                {!isFiltered &&
                data?.candidateTimes[0].unavailableParticipantNames.length !==
                  0 ? (
                  <NobodyWrapper>
                    <Nobody>
                      <NobodyRabbit src={nobody} alt="nobody" />
                      <NobodyText>모두가 되는 시간이 없어요</NobodyText>
                    </Nobody>
                  </NobodyWrapper>
                ) : null}

                <div style={{ padding: '0 20px' }}>
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
                        unavailableParticipantNames={
                          unavailableParticipantNames
                        }
                        count={
                          isFiltered
                            ? filteredParticipants.length
                            : roomInfo.participants.length
                        }
                        isFiltered={isFiltered}
                        defaultOpen={true}
                      />
                    )
                  )}
                </div>
              </>
            )}
          </Body>

          <ResultButton roomId={roomUUID} roomTitle={roomInfo.title} />

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
                  filter={filter}
                  setFilter={setFilter}
                  setIsSortOpened={setIsSortOpened}
                />
              }
            />
          )}
        </Wrapper>
      </Layout>
    </>
  );
};

export default Result;
