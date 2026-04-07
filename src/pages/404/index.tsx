import { useNavigate } from 'react-router-dom';

import { MainContainer } from './index.styles';
import { ROUTES } from '@/constants/routes';
import BottomButton from '@/components/commons/bottomButton';
import { Layout } from '@/components/commons/layout';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <MainContainer>
        <BottomButton
          onClick={() => {
            navigate(ROUTES.LANDING);
          }}
          isActivated={true}
          text={'홈으로 돌아가기'}
          isBackgroundVisible={false}
        />
      </MainContainer>
    </Layout>
  );
};

export default ErrorPage;
