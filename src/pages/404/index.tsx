import { useNavigate } from 'react-router-dom';

import { MainContainer } from './index.styles';
import { ROUTES } from '@/constants/ROUTES';
import BottomButton from '@/components/commons/bottomButton';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <BottomButton
        onClick={() => {
          navigate(`${ROUTES.LANDING}`);
        }}
        isActivated={true}
        text={'홈으로 돌아가기'}
        isBackgroundVisible={false}
      />
    </MainContainer>
  );
};

export default ErrorPage;
