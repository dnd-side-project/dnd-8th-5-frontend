import styled from '@emotion/styled';
import Header from '../../components/header/Header';
import SelectBox from '../../components/selectBox/SelectBox';
import theme from '../../styles/theme';

import nobody from '../../assets/images/nobody.png';
import Accordion from '../../components/accordion/Accordion';
import { useState } from 'react';
import ResultButton from '../../components/resultButton/ResultButton';
import Popup from '../../components/popup/Popup';
const Result = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const handleConfirmButtonClick = () => {
    setIsPopupOpened(true);
  };

  return (
    <Wrapper>
      <Header />
      <Body>
        <TitleWrapper>
          <Title isNumber={false}>현재까지</Title>
          <Title isNumber={true}>6</Title>
          <Title isNumber={false}>명의</Title>
        </TitleWrapper>
        <TitleWrapper>
          <Title isNumber={false}>약속 조율 결과예요</Title>
        </TitleWrapper>
        <SelectWrapper>
          <SelectBox text="전체 참여자" />
          <SelectBox text="빠른 시간 순" />
        </SelectWrapper>
        <NobodyWrapper>
          <Nobody>
            <NobodyRabbit src={nobody} alt="nobody" />
            <NobodyText>모두가 되는 시간이 없어요</NobodyText>
          </Nobody>
        </NobodyWrapper>
        <Accordion />
        <Accordion />
        <TimeWrapper isConfirmed={isConfirmed}>
          2월 11일 (월) 18:00 ~ 20:00
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
        </TimeWrapper>
      </Body>
      <ResultButton />
      {isPopupOpened && (
        <Popup
          setIsPopupOpened={setIsPopupOpened}
          setIsConfirmed={setIsConfirmed}
        />
      )}
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Body = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: 30px;
  overflow: scroll;

  padding-bottom: 117px;
`;

export const TitleWrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
`;

export const Title = styled.span<{ isNumber: boolean }>`
  margin-left: ${({ isNumber }) => (isNumber ? `6px` : `0`)};
  ${theme.typography.semibold02};

  color: ${({ isNumber }) =>
    isNumber ? ` ${theme.colors.orange02}` : ` ${theme.colors.gray07}`};
`;

const SelectWrapper = styled.div`
  width: 100%;
  height: 33px;
  margin-top: 34px;
`;

const NobodyWrapper = styled.div`
  width: 100%;
  height: 161px;
  margin-top: 14px;

  border-radius: 7px;
  border: 1px dashed ${theme.colors.gray03};
  background: ${theme.colors.gray02};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Nobody = styled.div`
  width: 188px;
  height: 105px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const NobodyRabbit = styled.img`
  width: 50px;
  height: 68px;
  object-fit: scale-down;
`;

const NobodyText = styled.span`
  color: ${theme.colors.gray04};
  ${theme.typography.semibold03};
`;

const TimeWrapper = styled.div<{ isConfirmed: boolean }>`
  width: 100%;
  height: 64px;
  padding: 0 20px;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ isConfirmed }) =>
    isConfirmed ? `${theme.colors.purple06}` : `${theme.colors.purple01}`};
  color: ${({ isConfirmed }) =>
    isConfirmed ? `${theme.colors.gray01}` : `${theme.colors.gray06}`};

  border-radius: 7px;
  ${theme.typography.semibold03};
`;

const ConfirmButton = styled.div<{ isConfirmed: boolean }>`
  height: 28px;
  padding: 0 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  ${theme.typography.medium04};

  color: ${({ isConfirmed }) =>
    isConfirmed ? `${theme.colors.gray01}` : `${theme.colors.purple06}`};

  border: ${({ isConfirmed }) =>
    isConfirmed
      ? `1px solid ${theme.colors.gray01}`
      : `1px solid ${theme.colors.purple06}`};

  cursor: pointer;
`;

export default Result;
