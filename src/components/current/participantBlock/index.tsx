import { ButtonHTMLAttributes } from 'react';
import { Wrapper } from './index.styles';
import { Participant } from '@/types/roomInfo';

interface ParticipantsBlockProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  participant: Participant;
  isSelected?: boolean;
  isDeleteMode?: boolean;
}

const ParticipantsBlock = ({
  participant,
  isSelected = false,
  isDeleteMode = false,
  ...rest
}: ParticipantsBlockProps) => {
  return (
    <Wrapper
      participant={participant.name}
      isSelected={isSelected}
      isDeleteMode={isDeleteMode}
      {...rest}
    >
      {participant.name.slice(0, 4)}
    </Wrapper>
  );
};

export default ParticipantsBlock;
