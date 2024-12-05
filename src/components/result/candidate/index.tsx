import Accordion from '@/components/commons/accordion';
import { Wrapper } from './index.styles';
import { CandidateTypes } from './index.types';

const Candidate = ({
  date,
  dayOfWeek,
  startTime,
  endTime,
  availableParticipantNames,
  unavailableParticipantNames,
  defaultOpen = false,
}: CandidateTypes) => {
  const convertDateFormat = () => {
    if (startTime && endTime) {
      return `${date.slice(5, 7)}월 ${date.slice(
        8,
        10
      )}일 (${dayOfWeek}) ${startTime} ~ ${endTime}`;
    } else {
      return `${date.slice(5, 7)}월 ${date.slice(8, 10)}일 (${dayOfWeek}) `;
    }
  };

  return (
    <Wrapper>
      <Accordion
        title={convertDateFormat()}
        availableParticipantNames={availableParticipantNames}
        unavailableParticipantNames={unavailableParticipantNames}
        totalCount={
          availableParticipantNames.length + unavailableParticipantNames.length
        }
        defaultOpen={defaultOpen}
      />
    </Wrapper>
  );
};

export default Candidate;
