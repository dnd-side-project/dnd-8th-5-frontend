import { Wrapper, BottomButtonContainer } from './index.styles';
import { BottomButtonType } from './index.types';

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
