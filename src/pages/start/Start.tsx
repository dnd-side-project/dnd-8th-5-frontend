import { Link } from 'react-router-dom';
import { BottomButton, MainContainer } from './start.styles';

const StartPage = () => {
  return (
    <MainContainer>
      <Link to="/roomStart">
        <BottomButton>μμνκΈ°</BottomButton>
      </Link>
    </MainContainer>
  );
};

export default StartPage;
