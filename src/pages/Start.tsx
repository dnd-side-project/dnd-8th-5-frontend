import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import startBack from '../assets/images/startBack.png';
import theme from '../styles/theme';

const StartPage = () => {
  return (
    <MainContainer>
      <Link to="/roomStart">
        <BottomButton>시작하기</BottomButton>
      </Link>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 375px;
  max-width: 375px;
  position: relative;
  left: 0;
  right: 0;
  height: 812px;
  background-image: url(${startBack});
  margin: 0 auto;
`;

const BottomButton = styled.button`
  width: 335px;
  max-width: 375px;
  height: 52px;
  margin: 0 auto;
  position: absolute;
  border-radius: 6px;
  ${theme.typography.semibold03};
  color: ${theme.colors.purple06};
  background: ${theme.colors.gray01};
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  bottom: 54px;
`;

export default StartPage;
