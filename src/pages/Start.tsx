import styled from '@emotion/styled';
import startBack from '../assets/backgrounds/startBack.png';

const StartPage = () => {
  return <MainContainer></MainContainer>;
};

const MainContainer = styled.div`
  width: 375px;
  height: 812px;
  background-image: url(${startBack});
`;

export default StartPage;
