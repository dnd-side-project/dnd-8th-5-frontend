import { Wrapper, BottomButtonContainer } from './BottomButton.styles';
import { BottomButtonType } from './BottomButton.types';

const BottomButton = ({
  onClick,
  text,
  isActivated,
  isBackgroundVisible = true,
}: BottomButtonType) => {
  return (
    <BottomButtonContainer isBackgroundVisible={isBackgroundVisible}>
      <Wrapper onClick={onClick} isActivated={isActivated}>
        {text}
      </Wrapper>
    </BottomButtonContainer>
  );
};

export default BottomButton;
