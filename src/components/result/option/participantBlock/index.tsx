import { ParticipantWrapper } from '../participantsOption/index.styles';
import { ParticipantBlockTypes } from '../participantsOption/index.types';

const ParticipantBlock = ({
  id,
  isSelected,
  onClick,
}: ParticipantBlockTypes) => {
  return (
    <ParticipantWrapper id={id} onClick={onClick} isSelected={isSelected}>
      {id}
    </ParticipantWrapper>
  );
};

export default ParticipantBlock;
