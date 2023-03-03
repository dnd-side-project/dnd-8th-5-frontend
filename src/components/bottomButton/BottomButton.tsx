import { Wrapper } from './BottomButton.styles';
import { BottomButtonType } from './BottomButton.types';

const BottomButton = ({ navigate, text, isActivated }: any) => {
  return (
    <Wrapper onClick={navigate} isActivated={isActivated}>
      {text}
    </Wrapper>
  );
};

export default BottomButton;
