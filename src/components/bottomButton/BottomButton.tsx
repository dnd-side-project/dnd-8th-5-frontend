import { Wrapper } from './BottomButton.styles';
import { BottomButtonType } from './BottomButton.types';

const BottomButton = ({ text, isActivated }: BottomButtonType) => {
  return <Wrapper isActivated={isActivated}>{text}</Wrapper>;
};

export default BottomButton;
