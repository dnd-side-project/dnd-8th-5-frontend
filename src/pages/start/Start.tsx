import { Link } from 'react-router-dom';
import { BottomButton, MainContainer } from './start.styles';
import { ROUTES } from '../../constants/ROUTES';

const StartPage = () => {
  return (
    <MainContainer>
      <Link to={ROUTES.ROOM_START}>
        <BottomButton>시작하기</BottomButton>
      </Link>
    </MainContainer>
  );
};

export default StartPage;
