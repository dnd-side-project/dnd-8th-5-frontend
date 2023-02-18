import { Wrapper } from './participantsBlock.styles';
import { participant } from '../../types/roomInfo';

const ParticipantsBlock = ({ participant }: participant) => {
  return <Wrapper>{participant.slice(0, 4)}</Wrapper>;
};

export default ParticipantsBlock;
