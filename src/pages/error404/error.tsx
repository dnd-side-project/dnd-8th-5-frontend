import { MainContainer } from './error.styles';
import BottomButton from '../../components/bottomButton/BottomButton';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <MainContainer>
      <BottomButton
        onClick={() => {
          navigate('/');
        }}
        isActivated={true}
        text={'홈으로 돌아가기'}
        background={false}
      />
    </MainContainer>
  );
};

export default ErrorPage;
