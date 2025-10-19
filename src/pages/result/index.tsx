import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/commons/layout';
import Header from '@/components/commons/header';
import { ROUTES } from '@/constants/ROUTES';
import { useGetRoomInfo } from '@/queries/room/useGetRoomInfo';
import { useNavigate, useParams } from 'react-router-dom';
import SelectBox from '@/components/result/selectBox';
import ResultButton from '@/components/result/button';
import BottomSheet from '@/components/result/bottomSheet';
import SortOption from '@/components/result/option/sortOption';
import { useEffect, useState } from 'react';
import { useGetCandidateTimes } from '@/queries/result/useGetCandidateTimes';
import empty from '@/assets/images/nobody.png';
import { Candidate } from '@/components/result/candidate';
import { ParticipantOption } from '@/components/result/option/participantsOption';
import { Loading } from '@/components/commons/loading';

export interface FilterTypes {
  names: string[];
  sort: 'fast' | 'long';
}

function EmptyResult() {
  return (
    <EmptyWrapper>
      <EmptyRabbit src={empty} alt="모두가 되는 시간이 없어요" />
      <EmptyText>모두가 되는 시간이 없어요</EmptyText>
    </EmptyWrapper>
  );
}

export default function Result() {
  const { roomId } = useParams<{ roomId: string }>();
  const navigation = useNavigate();

  const { data: roomInfo } = useGetRoomInfo(roomId || '');

  const [filter, setFilter] = useState<FilterTypes>({
    names: [],
    sort: 'fast',
  });

  const [isParticipantFilterOpen, setIsParticipantFilterOpen] =
    useState<boolean>(false);
  const [isSortFilterOpen, setIsSortFilterOpen] = useState<boolean>(false);

  const { data: candidateTimes } = useGetCandidateTimes(
    roomId ?? '',
    filter.sort,
    filter.names.sort((a, b) => a.localeCompare(b, 'ko-KR'))
  );

  const isParticipantsFiltered =
    roomInfo?.participants.length !== filter.names.length;

  const showEmpty =
    !candidateTimes ||
    candidateTimes.candidateTimes.length === 0 ||
    candidateTimes.candidateTimes[0].unavailableParticipantNames.length <
      filter.names.length;

  const selectedParticipantsText = (() => {
    if (filter.names.length === roomInfo?.participants.length) {
      return '전체 참여자';
    }

    if (filter.names.length === 1) {
      return filter.names[0];
    }

    if (filter.names.length > 1) {
      return `${filter.names[0]} 외 ${filter.names.length - 1}명`;
    }

    return '전체 참여자';
  })();

  const selectedSortText = (() => {
    switch (filter.sort) {
      case 'fast':
        return '빠른 시간순';
      case 'long':
        return '오래 만날 수 있는 순';
      default:
        return '빠른 시간순';
    }
  })();

  useEffect(() => {
    if (roomInfo) {
      setFilter((prev) => ({
        ...prev,
        names: roomInfo.participants.map((participant) => participant.name),
      }));
    }
  }, [roomInfo?.participants]);

  if (!roomId) {
    navigation(ROUTES.LANDING);
    return;
  }

  if (!roomInfo) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

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
            roomId={roomId}
            title={roomInfo.title}
          />
          <Main>
            <Title>
              <h1>
                현재까지 <span>{filter.names.length}</span>명의
              </h1>
              <h1>약속 조율 결과예요</h1>
            </Title>

            <div>
              <SelectBox
                text={selectedParticipantsText}
                handleClick={() => setIsParticipantFilterOpen((prev) => !prev)}
              />
              <SelectBox
                text={selectedSortText}
                handleClick={() => setIsSortFilterOpen((prev) => !prev)}
              />
            </div>

            {showEmpty && <EmptyResult />}

            {candidateTimes && candidateTimes.candidateTimes.length > 0 && (
              <List>
                {candidateTimes?.candidateTimes.map((candidateTime) => (
                  <Candidate
                    key={candidateTime.id}
                    candidateTime={candidateTime}
                    isFiltered={isParticipantsFiltered}
                    totalCount={
                      isParticipantsFiltered
                        ? filter.names.length
                        : roomInfo.participants.length
                    }
                  />
                ))}
              </List>
            )}
          </Main>
        </Wrapper>

        <ResultButton roomId={roomId} roomTitle={roomInfo.title} />

        {isParticipantFilterOpen && (
          <BottomSheet
            closeBottomSheet={() => setIsParticipantFilterOpen(false)}
            title="참여자"
            children={
              <ParticipantOption
                handleCloseBottomSheet={() => setIsParticipantFilterOpen(false)}
                participants={roomInfo.participants.map(
                  (participant) => participant.name
                )}
                selectedParticipants={filter.names}
                handleSelectedParticipantsSelect={(participants: string[]) =>
                  setFilter((prev) => ({ ...prev, names: participants }))
                }
              />
            }
          />
        )}

        {isSortFilterOpen && (
          <BottomSheet
            closeBottomSheet={() => setIsSortFilterOpen(false)}
            title="정렬"
            children={
              <SortOption
                handleCloseBottomSheet={() => setIsSortFilterOpen(false)}
                sort={filter.sort}
                handleSortChange={(sort: 'fast' | 'long') =>
                  setFilter((prev) => ({ ...prev, sort: sort }))
                }
              />
            }
          />
        )}
      </Layout>
    </>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`;

export const Main = styled.main`
  width: 100%;
  padding: 60px 20px 0 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin: 36px 0;

  h1 {
    margin: 0;
    color: ${theme.colors.gray07};
    ${theme.typography.semibold01}
  }

  span {
    color: ${theme.colors.orange03};
    ${theme.typography.semibold01}
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 0 110px 0;
`;

export const EmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 16px 0 12px 0;
  padding: 28px 0;
  border-radius: 8px;
  border: 1px dashed ${theme.colors.gray03};
  background: ${theme.colors.gray02};
`;

export const EmptyRabbit = styled.img`
  width: 37px;
  height: 49px;
  object-fit: cover;
`;

export const EmptyText = styled.span`
  color: ${theme.colors.gray04};
  ${theme.typography.medium02};
`;
