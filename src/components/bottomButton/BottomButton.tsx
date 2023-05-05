import { Wrapper } from './BottomButton.styles';
// import { BottomButtonType } from './BottomButton.types';

const BottomButton = ({ onClick, text, isActivated }: any) => {
  return (
    <Wrapper onClick={onClick} isActivated={isActivated}>
      {text}
    </Wrapper>
  );
};

export default BottomButton;
