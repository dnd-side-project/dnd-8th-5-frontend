import { Link } from 'react-router-dom';
import { BottomButton, MainContainer } from './Start.styles';

const StartPage = () => {
  return (
    <MainContainer>
      <Link to="/roomStart">
        <BottomButton>시작하기</BottomButton>
      </Link>
    </MainContainer>
  );
};

export default StartPage;
