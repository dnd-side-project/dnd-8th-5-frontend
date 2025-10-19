import Accordion from '@/components/commons/accordion';
import { Wrapper } from './index.styles';
import { CandidateTime } from '@/types/result';

interface Props {
  candidateTime: CandidateTime;
  totalCount: number;
  isFiltered: boolean;
}

export function Candidate({ candidateTime, totalCount, isFiltered }: Props) {
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
        availableParticipantNames={candidateTime.availableParticipantNames}
        unavailableParticipantNames={
          isFiltered ? [] : candidateTime.unavailableParticipantNames
        }
        totalCount={totalCount}
        defaultOpen={true}
      />
    </Wrapper>
  );
}
