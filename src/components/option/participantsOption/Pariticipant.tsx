import { ParticipantWrapper } from './participantsOption.styles';
import { ParticipantBlockTypes } from './participantsOption.types';

const Participant = ({ id, isSelected, onClick }: ParticipantBlockTypes) => {
  return (
    <ParticipantWrapper id={id} onClick={onClick} isSelected={isSelected}>
      {id}
    </ParticipantWrapper>
  );
};

export default Participant;
