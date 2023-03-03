import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import startBack from '../../assets/images/startBack.png';
import {
  BackgroundContainer,
  BottomButton,
  MainContainer,
} from './start.styles';

const StartPage = () => {
  return (
    <MainContainer>
      <BackgroundContainer src={startBack} />
      <Link to="/roomStart">
        <BottomButton>시작하기</BottomButton>
      </Link>
    </MainContainer>
  );
};

export default StartPage;
