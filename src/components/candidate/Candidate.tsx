import {
  Content,
  ListItem,
  Participant,
  People,
  ProportionWrapper,
  TimeWrapper,
  Wrapper,
} from './Candidate.styles';
import { CandidateTypes } from './Candidate.types';

const Candidate = ({
  date,
  dayOfWeek,
  startTime,
  endTime,
  participantNames,
  count,
}: CandidateTypes) => {
  const convertDateFormat = () => {
    if (startTime && endTime) {
      return `${date.slice(5, 7)}월 ${date.slice(
        8,
        10
      )} (${dayOfWeek}) ${startTime} ~ ${endTime}`;
    } else {
      return `${date.slice(5, 7)}월 ${date.slice(8, 10)} (${dayOfWeek}) `;
    }
  };

  return (
    <Wrapper>
      <Content>
        {count !== null && (
          <ProportionWrapper>
            <People isParticipant={false}>{count}명 중</People>
            <People isParticipant={true}> {participantNames.length}명</People>
          </ProportionWrapper>
        )}
        <TimeWrapper>{convertDateFormat()}</TimeWrapper>
      </Content>

      <ListItem>
        {participantNames.map((name: string) => (
          <Participant key={name}>{name}</Participant>
        ))}
      </ListItem>
    </Wrapper>
  );
};

export default Candidate;
