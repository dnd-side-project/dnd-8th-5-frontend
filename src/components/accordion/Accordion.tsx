import { useState, useRef } from 'react';

import expand from '../../assets/icons/expand.svg';
import collapse from '../../assets/icons/collapse.svg';

import {
  Content,
  DefaultWrapper,
  ListItem,
  ListWrapper,
  Participant,
  People,
  PeopleWrapper,
  TimeSpan,
  TimeWrapper,
  Wrapper,
  Icon,
} from './Accordion.styles';

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

export default Accordion;
