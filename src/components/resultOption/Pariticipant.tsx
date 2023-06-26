import { ParticipantWrapper } from './SelectParticipants.styles';
import { ParticipantBlockTypes } from './resultOption.types';

const Participant = ({ id, isSelected, onClick }: ParticipantBlockTypes) => {
  return (
    <ParticipantWrapper id={id} onClick={onClick} isSelected={isSelected}>
      {id}
    </ParticipantWrapper>
  );
};

export default Participant;
