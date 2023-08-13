import { MainContainer } from './404.styles';
import BottomButton from '../../components/bottomButton/BottomButton';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/ROUTES';

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
