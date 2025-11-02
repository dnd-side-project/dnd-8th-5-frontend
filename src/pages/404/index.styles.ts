import styled from '@emotion/styled';
import background from '@/assets/images/errorBack.webp';

export const MainContainer = styled.div`
  width: 100%;
  max-width: 412px;
  height: 100vh;

  margin: 0 auto;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  overscroll-behavior: none;
`;
