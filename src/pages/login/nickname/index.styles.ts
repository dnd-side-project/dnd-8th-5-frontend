import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 412px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.purple05};
  overflow: auto;
  overscroll-behavior: none;
`;

export const Logo = styled.img`
  width: 100%;
  height: 36%;
  max-height: 333px;
  object-fit: cover;
  overscroll-behavior: none;
`;

export const Body = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 24px 20px 0;
  background: ${theme.colors.gray01};
`;
