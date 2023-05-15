import { Wrapper, BottomButtonContainer } from './BottomButton.styles';
// import { BottomButtonType } from './BottomButton.types';

const BottomButton = ({ onClick, text, isActivated }: any) => {
  return (
    <BottomButtonContainer>
      <Wrapper onClick={onClick} isActivated={isActivated}>
        {text}
      </Wrapper>
    </BottomButtonContainer>
  );
};

export default BottomButton;
