import {
  Bar,
  Proportion,
  RabbitWrapper,
  Span,
  Wrapper,
} from './progressBar.styles';
import { currentParticipants } from '../../types/roomInfo';

const ProgressBar = ({ headCount, participants }: currentParticipants) => {
  return (
    <>
      <RabbitWrapper>
        <Proportion>
          <Span>{participants.length}</Span> / {headCount}
        </Proportion>
      </RabbitWrapper>
      <Wrapper>
        {headCount && (
          <Bar headCount={headCount} participantsNumber={participants.length} />
        )}
      </Wrapper>
    </>
  );
};

export default ProgressBar;
