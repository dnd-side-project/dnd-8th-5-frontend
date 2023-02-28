import { Wrapper } from './BottomButton.styles';
import { bottomButton } from '../../types/bottomButton';

const BottomButton = ({ text, isActivated }: bottomButton) => {
  return <Wrapper isActivated={isActivated}>{text}</Wrapper>;
};

export default BottomButton;
