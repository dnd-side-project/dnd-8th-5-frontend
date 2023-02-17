import { Bar, Wrapper } from './progressBar.styles';
import { currentParticipants } from '../../types/roomInfo';

const ProgressBar = ({ headCount, participants }: currentParticipants) => {
  const participantsNumber: number = participants.length;

  return (
    <Wrapper>
      <Bar headCount={headCount} participantsNumber={participantsNumber} />
    </Wrapper>
  );
};

export default ProgressBar;
