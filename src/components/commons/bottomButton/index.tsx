import { Wrapper, BottomButtonContainer } from './index.styles';
import { BottomButtonType } from './index.types';

const BottomButton = ({
  onClick,
  text,
  isActivated,
  isBackgroundVisible = true,
  isLanding = false,
}: BottomButtonType) => {
  return (
    <BottomButtonContainer isBackgroundVisible={isBackgroundVisible}>
      <Wrapper
        onClick={onClick}
        isActivated={isActivated}
        isLanding={isLanding}
      >
        {text}
      </Wrapper>
    </BottomButtonContainer>
  );
};

export default BottomButton;
