import { Cover, Wrapper } from './BottomButton.styles';
import { BottomButtonType } from './BottomButton.types';

const BottomButton = ({ text, isActivated, onClick }: BottomButtonType) => {
  return (
    <Cover>
      <Wrapper onClick={onClick} isActivated={isActivated}>
        {text}
      </Wrapper>
    </Cover>
  );
};

export default BottomButton;
