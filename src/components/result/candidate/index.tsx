import Accordion from '@/components/commons/accordion';
import { Wrapper } from './index.styles';
import { CandidateTime } from '@/types/result';

interface Props {
  candidateTime: CandidateTime;
  isFiltered: boolean;
  totalCount: number;
}

export function Candidate({ candidateTime, isFiltered, totalCount }: Props) {
  const convertDateFormat = () => {
    if (candidateTime.startTime && candidateTime.endTime) {
      return `${candidateTime.date.slice(5, 7)}월 ${candidateTime.date.slice(
        8,
        10
      )}일 (${candidateTime.dayOfWeek}) ${candidateTime.startTime} ~ ${
        candidateTime.endTime
      }`;
    } else {
      return `${candidateTime.date.slice(5, 7)}월 ${candidateTime.date.slice(
        8,
        10
      )}일 (${candidateTime.dayOfWeek}) `;
    }
  };

  return (
    <Wrapper>
      <Accordion
        title={convertDateFormat()}
        isFiltered={isFiltered}
        availableParticipantNames={candidateTime.availableParticipantNames}
        unavailableParticipantNames={candidateTime.unavailableParticipantNames}
        totalCount={totalCount}
        defaultOpen={true}
      />
    </Wrapper>
  );
}
