import { ButtonHTMLAttributes } from 'react';
import { Wrapper } from './index.styles';

interface ParticipantsBlockProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  participant: string;
  isSelected?: boolean;
}

const ParticipantsBlock = ({
  participant,
  isSelected = false,
  ...rest
}: ParticipantsBlockProps) => {
  return (
    <Wrapper participant={participant} isSelected={isSelected} {...rest}>
      {participant.slice(0, 4)}
    </Wrapper>
  );
};

export default ParticipantsBlock;
