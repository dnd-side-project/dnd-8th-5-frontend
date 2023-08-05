import { Wrapper, BottomButtonContainer } from './BottomButton.styles';
import { BottomButtonType } from './BottomButton.types';

const BottomButton = ({
  onClick,
  text,
  isActivated,
  background = true,
}: BottomButtonType) => {
  return (
    <BottomButtonContainer background={background}>
      <Wrapper onClick={onClick} isActivated={isActivated}>
        {text}
      </Wrapper>
    </BottomButtonContainer>
  );
};

export default BottomButton;
