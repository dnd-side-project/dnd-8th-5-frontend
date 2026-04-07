import { useNavigate } from 'react-router-dom';

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

const Button = ({
  roomId,
  roomTitle,
}: {
  roomId: string;
  roomTitle: string;
}) => {
  const navigate = useNavigate();

  const { handleUseShareAPI } = useShareLink(roomId, roomTitle);

  const goToCurrent = () => {
    navigate(`${ROUTES.CURRENT}/${roomId}`);
  };

  return (
    <Wrapper>
      <Bubble src={resultBubble} alt="go to current page bubble" />
      <BottomWrapper>
        <CurrentButtonWrapper onClick={goToCurrent}>
          <CurrentButton src={home} alt="go to current page" />
        </CurrentButtonWrapper>
        <BottomButton onClick={handleUseShareAPI}>
          결과 공유하기
          <ShareButton src={shareResult} alt="share" />
        </BottomButton>
      </BottomWrapper>
    </Wrapper>
  );
};

export default Button;
