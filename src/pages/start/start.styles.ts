import styled from '@emotion/styled';
import theme from '../../styles/theme';
import startBack from '../../assets/images/startBack.png';

export const MainContainer = styled.div`
  width: 100%;
  max-width: 412px;
  height: calc(100vh + 90px);
  position: relative;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  background-image: url(${startBack});
`;

export const BottomButton = styled.button`
  width: calc(100% - 40px);
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
  position: fixed;
  left: 0;
  right: 0;
  bottom: 28px;
`;
