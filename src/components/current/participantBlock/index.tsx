import { ButtonHTMLAttributes } from 'react';
import { Wrapper } from './index.styles';
import { Participant } from '@/types/roomInfo';

interface ParticipantsBlockProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  participant: Participant;
  isSelected?: boolean;
}

const ParticipantsBlock = ({
  participant,
  isSelected = false,
  ...rest
}: ParticipantsBlockProps) => {
  return (
    <Wrapper participant={participant.name} isSelected={isSelected} {...rest}>
      {participant.name.slice(0, 4)}
    </Wrapper>
  );
};

export default ParticipantsBlock;
