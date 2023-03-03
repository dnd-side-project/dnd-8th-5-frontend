import styled from '@emotion/styled';
import { useState, useRef } from 'react';

import expand from '../../assets/icons/expand.svg';
import collapse from '../../assets/icons/collapse.svg';
import theme from '../../styles/theme';

const Accordion = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const handleCollapse = () => {
    if (parentRef.current === null || childRef.current === null) {
      return;
    }

    if (parentRef.current.clientHeight > 0) {
      parentRef.current.style.height = '0px';
    } else if (parentRef.current.clientHeight === 0) {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }
    setIsCollapse(!isCollapse);
  };

  return (
    <Wrapper>
      <DefaultWrapper>
        <Content onClick={handleCollapse}>
          <PeopleWrapper>
            {' '}
            <People isParticipant={false}>6명 중</People>
            <People isParticipant={true}> 5명</People>
          </PeopleWrapper>
          <TimeWrapper>
            <TimeSpan>2월 13일 (월) 18:00 ~ 20:00</TimeSpan>
            <Icon src={isCollapse ? collapse : expand} />
          </TimeWrapper>
        </Content>
      </DefaultWrapper>

      <ListWrapper ref={parentRef}>
        <ListItem ref={childRef}>
          <Participant>김주현</Participant>
          <Participant>김주현</Participant>
          <Participant>김주현</Participant>
          <Participant>김주현</Participant>
          <Participant>김주현</Participant>
          <Participant>김주현</Participant>
          <Participant>김주현</Participant>
          <Participant>김주현</Participant>
          <Participant>김주현</Participant>
          <Participant>김주현</Participant>
          <Participant>김주현</Participant>
          <Participant>김주현</Participant>
          <Participant>김주현</Participant>
          <Participant>김주현</Participant>
          <Participant>김주현</Participant>
        </ListItem>
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 375px;
  margin-top: 10px;

  border-radius: 7px;
  background: ${theme.colors.purple01};

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DefaultWrapper = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const Content = styled.div`
  width: 100%;
  height: 73px;
  padding: 15px 19px 15px 17px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const PeopleWrapper = styled.div`
  width: 100%;
`;

const People = styled.span<{ isParticipant: boolean }>`
  color: ${({ isParticipant }) =>
    isParticipant ? `${theme.colors.orange02}` : `${theme.colors.gray05}`};

  ${theme.typography.semibold07};
`;

const TimeWrapper = styled.div`
  width: 100%;
  margin-top: 4px;

  display: flex;
  justify-content: space-between;
`;

const TimeSpan = styled.span`
  color: ${theme.colors.gray06};
  ${theme.typography.semibold03};
`;

const Icon = styled.img`
  width: 21px;
  height: 21px;

  cursor: pointer;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: 0px;

  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;

const ListItem = styled.div`
  width: 100%;
  padding: 17px;

  display: flex;
  flex-flow: wrap;

  row-gap: 4px;
  column-gap: 4px;
`;

const Participant = styled.div`
  width: 44px;
  height: 24px;
  border-radius: 3px;

  ${theme.typography.medium05};
  color: ${theme.colors.gray05};
  background: ${theme.colors.gray01};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Accordion;
