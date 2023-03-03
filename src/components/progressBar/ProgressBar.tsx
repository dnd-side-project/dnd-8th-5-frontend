import { Bar, Proportion, Span, Wrapper } from './progressBar.styles';
import { currentParticipants } from '../../types/roomInfo';

const ProgressBar = ({ headCount, participants }: currentParticipants) => {
  return (
    <>
      <Proportion>
        <Span>{participants.length}</Span> / {headCount}
      </Proportion>
      <Wrapper>
        {headCount && (
          <Bar headCount={headCount} participantsNumber={participants.length} />
        )}
      </Wrapper>
    </>
  );
};

export default ProgressBar;
