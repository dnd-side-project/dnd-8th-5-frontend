import styled from '@emotion/styled';
import Header from '../../components/header/Header';
import SelectBox from '../../components/selectBox/SelectBox';
import theme from '../../styles/theme';

import nobody from '../../assets/images/nobody.png';
import Accordion from '../../components/accordion/Accordion';
import { useEffect, useState } from 'react';
import ResultButton from '../../components/resultButton/ResultButton';
import Popup from '../../components/popup/Popup';

import result from '../../assets/data/result.json';
import {
  Body,
  ConfirmButton,
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

const Result = () => {
  const { roomUuid } = useParams();

  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isParticipantOpened, setIsParticipantOpened] = useState(false);

  const handleConfirmButtonClick = () => {
    setIsPopupOpened(true);
  };

  const [room, setRoom] = useRecoilState(roomState);

  useEffect(() => {
    const getRoomInfo = async () => {
      const { data } = await API.get(`/api/room/${roomUuid}`);
      setRoom(data);
    };

    getRoomInfo();
  }, []);

  const { title, participants, headCount } = room;

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
          <SelectBox text="전체 참여자" />
          <SelectBox text="빠른 시간 순" />
        </SelectWrapper>
        {participants.length === headCount ? (
          <>
            {result.candidateTimes.map(
              ({ date, dayOfWeek, startTime, endTime, isConfirmed }) => {
                <TimeWrapper
                  key={`all ${date} ${dayOfWeek} ${startTime} ${endTime}`}
                  isConfirmed={isConfirmed}
                >
                  {`${date.slice(0, 2)}월 ${date.slice(
                    3,
                    5
                  )} (${dayOfWeek}) ${startTime} ~ ${endTime}`}
                  {isConfirmed ? (
                    <ConfirmButton
                      isConfirmed={isConfirmed}
                      onClick={handleConfirmButtonClick}
                    >
                      확정 취소
                    </ConfirmButton>
                  ) : (
                    <ConfirmButton
                      isConfirmed={isConfirmed}
                      onClick={handleConfirmButtonClick}
                    >
                      확정
                    </ConfirmButton>
                  )}
                </TimeWrapper>;
              }
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
            {result.candidateTimes.map(
              ({ date, dayOfWeek, startTime, endTime, participantNames }) => (
                <Accordion
                  key={`part ${date} ${startTime} ${endTime}`}
                  date={date}
                  dayOfWeek={dayOfWeek}
                  startTime={startTime}
                  endTime={endTime}
                  participantNames={participantNames}
                  headCount={headCount}
                />
              )
            )}
          </>
        )}
      </Body>
      <ResultButton />
      {/* {isPopupOpened && (
        <Popup
          setIsPopupOpened={setIsPopupOpened}
          setIsConfirmed={setIsConfirmed}
        />
      )} */}
      {/* {isParticipantOpened && <BottomSheet} */}
    </Wrapper>
  );
};

export default Result;
