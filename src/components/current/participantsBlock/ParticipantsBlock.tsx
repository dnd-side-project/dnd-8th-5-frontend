import { Wrapper } from './participantsBlock.styles';
import { participant } from '@/types/roomInfo';

const ParticipantsBlock = ({ participant }: participant) => {
  return <Wrapper participant={participant}>{participant.slice(0, 4)}</Wrapper>;
};

export default ParticipantsBlock;
