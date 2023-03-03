import { useState, useRef } from 'react';

import expand from '../../assets/icons/expand.svg';
import collapse from '../../assets/icons/collapse.svg';

import room from '../../assets/data/room.json';

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
import { AccordionTypes } from './Accordion.types';

const Accordion = ({
  date,
  dayOfWeek,
  startTime,
  endTime,
  participantNames,
}: AccordionTypes) => {
  const { headCount } = room;
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
            <People isParticipant={false}>{headCount}명 중</People>
            <People isParticipant={true}> {participantNames.length}명</People>
          </PeopleWrapper>
          <TimeWrapper>
            <TimeSpan>{`${date.slice(0, 2)}월 ${date.slice(
              3,
              5
            )} (${dayOfWeek}) ${startTime} ~ ${endTime}`}</TimeSpan>
            <Icon src={isCollapse ? collapse : expand} />
          </TimeWrapper>
        </Content>
      </DefaultWrapper>

      <ListWrapper ref={parentRef}>
        <ListItem ref={childRef}>
          {participantNames.map((name: string) => (
            <Participant key={name}>{name}</Participant>
          ))}
        </ListItem>
      </ListWrapper>
    </Wrapper>
  );
};

export default Accordion;
