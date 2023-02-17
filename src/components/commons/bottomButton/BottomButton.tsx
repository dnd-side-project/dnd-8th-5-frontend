import { Wrapper } from './BottomButton.styles';
import { bottomButton } from '../../../types/commons/bottomButton';

const BottomButton = ({ text }: bottomButton) => {
  return <Wrapper>{text}</Wrapper>;
};

export default BottomButton;
