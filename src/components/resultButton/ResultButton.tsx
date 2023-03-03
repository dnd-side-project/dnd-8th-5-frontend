import home from '../../assets/icons/home.svg';
import shareResult from '../../assets/icons/shareResult.svg';
import bubble from '../../assets/images/bubble.png';

import {
  BottomButton,
  BottomWrapper,
  Bubble,
  CurrentButton,
  CurrentButtonWrapper,
  ShareButton,
  Wrapper,
} from './ResultButton.styles';

const ResultButton = () => {
  return (
    <Wrapper>
      <Bubble src={bubble} alt="go to current page bubble" />
      <BottomWrapper>
        <CurrentButtonWrapper>
          <CurrentButton src={home} alt="go to current page" />
        </CurrentButtonWrapper>
        <BottomButton>
          결과 공유하기
          <ShareButton src={shareResult} alt="share" />
        </BottomButton>
      </BottomWrapper>
    </Wrapper>
  );
};

export default ResultButton;
