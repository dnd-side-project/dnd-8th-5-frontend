import styled from '@emotion/styled';
import background from '../../assets/images/errorBack.webp';

export const MainContainer = styled.div`
  width: 100%;
  max-width: 412px;
  height: 100vh;

  margin: 0 auto;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
`;

export const BottomButton = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90px;
  background-color: ${(props) => props.theme.colors.gray01};
  display: flex;
`;
