import { useNavigate, useParams } from 'react-router-dom';

import {
  BottomButton,
  BottomWrapper,
  Bubble,
  CurrentButton,
  CurrentButtonWrapper,
  ShareButton,
  Wrapper,
} from './index.styles';
import home from '@/assets/icons/home.svg';
import shareResult from '@/assets/icons/shareResult.svg';
import resultBubble from '@/assets/images/resultBubble.png';

import { ROUTES } from '@/constants/ROUTES';
import useShareLink from '@/hooks/useShareLink';

const ResultButton = () => {
  const { roomUUID } = useParams();
  const navigate = useNavigate();

  const { handleUseShareAPI } = useShareLink();

  const goToCurrent = () => {
    navigate(`${ROUTES.CURRENT}/${roomUUID}`);
  };

  return (
    <Wrapper>
      <Bubble src={resultBubble} alt="go to current page bubble" />
      <BottomWrapper>
        <CurrentButtonWrapper>
          <CurrentButton
            src={home}
            alt="go to current page"
            onClick={goToCurrent}
          />
        </CurrentButtonWrapper>
        <BottomButton onClick={handleUseShareAPI}>
          결과 공유하기
          <ShareButton src={shareResult} alt="share" />
        </BottomButton>
      </BottomWrapper>
    </Wrapper>
  );
};

export default ResultButton;
