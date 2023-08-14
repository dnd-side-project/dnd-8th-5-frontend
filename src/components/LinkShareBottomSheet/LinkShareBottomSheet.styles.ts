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
  height: 450px;

  position: fixed;
  z-index: 4;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  animation: ${slideUpAnimation} 0.5s;
`;

export const Rabbit = styled.img`
  width: 209px;
  height: 163px;

  position: absolute;
  z-index: 5;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Main = styled.div`
  width: 100%;
  height: 323px;
  padding: 36px 19px 0 19px;

  position: absolute;
  bottom: 0;

  border-radius: 12px 12px 0 0;
  background: ${theme.colors.gray01};
`;

export const Title = styled.div`
  color: ${theme.colors.gray07};
  ${theme.typography.semibold02};

  & + & {
    margin-top: 2px;
  }
`;

export const LinkWrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 13px 0 10px;
  margin-top: 24px;
  border: 1px solid ${theme.colors.gray04};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkText = styled.div`
  width: 292px;

  ${theme.typography.regular01};
  color: ${theme.colors.gray04};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CopyIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ShareButton = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 6px;
  margin-top: 45px;

  ${theme.typography.semibold03};
  color: ${theme.colors.gray01};
  background: ${theme.colors.purple06};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LaterButtonWrapper = styled.div`
  width: 100%;
  margin-top: 15px;

  display: flex;
  justify-content: center;
`;

export const LaterButton = styled.span`
  ${theme.typography.regular01};
  color: ${theme.colors.gray04};
`;
