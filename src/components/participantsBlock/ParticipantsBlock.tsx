import { Wrapper } from './participantsBlock.styles';
import { participant } from '../../types/roomInfo';

const ParticipantsBlock = ({ participant }: participant) => {
  return <Wrapper>{participant}</Wrapper>;
};

export default ParticipantsBlock;
