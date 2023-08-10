import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { slideUpAnimation } from '@/utils/slideAnimation';

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.45);
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 412px;
  height: 279px;
  border-radius: 12px 12px 0 0;
  background: ${theme.colors.gray01};

  position: fixed;
  z-index: 4;
  bottom: 0;

  animation: ${slideUpAnimation} 0.5s;
`;

export const Header = styled.div`
  width: 100%;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderBar = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 7px;
  background: ${theme.colors.gray03};
`;

export const Body = styled.div`
  width: 100%;
  height: 257px;
  padding: 17px 20px 0 20px;
`;

export const Title = styled.span`
  color: ${theme.colors.gray07};
  ${theme.typography.semibold03};
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 24px;
  position: relative;
  height: 197px;
`;
