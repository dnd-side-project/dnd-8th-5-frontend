import { Loading } from '../loading';
import { Wrapper, BottomButtonContainer } from './index.styles';
import { BottomButtonType } from './index.types';

const BottomButton = ({
  onClick,
  text,
  isActivated,
  isBackgroundVisible = true,
  isLanding = false,
  isLoading = false,
}: BottomButtonType) => {
  return (
    <BottomButtonContainer isBackgroundVisible={isBackgroundVisible}>
      <Wrapper
        onClick={onClick}
        isActivated={isActivated}
        disabled={!isActivated}
        isLanding={isLanding}
      >
        {isLoading ? <Loading size={20} /> : text}
      </Wrapper>
    </BottomButtonContainer>
  );
};

export default BottomButton;
