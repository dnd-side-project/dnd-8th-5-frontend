import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { slideRightAnimation } from '../../utils/slideRightAnimation';

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

export const Side = styled.div`
  width: 254px;
  height: 100%;
  background: ${theme.colors.purple02};
  border-radius: 0 20px 20px 0;

  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  bottom: 0;

  animation: ${slideRightAnimation} 0.5s;
`;

export const Exit = styled.img`
  width: 29px;
  height: 86px;

  position: absolute;
  right: 0;
  top: 44%;

  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 243px;
  height: 100%;
  padding: 0 20px;
  border-radius: 0 20px 20px 0;

  background: ${theme.colors.gray01};

  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;

  animation: ${slideRightAnimation} 0.5s;
`;

export const Top = styled.div`
  width: 100%;
  height: 72px;
  padding: 0 6px;
  margin-top: 68px;
  border-bottom: 1px solid ${theme.colors.gray03};

  display: flex;
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
`;

export const Bottom = styled.div`
  width: 100%;
  height: calc(100% - 140px);
  padding: 0 6px 44px 6px;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PlusWrapper = styled.div`
  width: 160px;
  height: 28px;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

export const PlusIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const PlusText = styled.div`
  margin-left: 4px;

  color: ${theme.colors.gray06};
  ${theme.typography.semibold02};
`;

export const FeedbackBtn = styled.div`
  width: 205px;
  height: 52px;
  border-radius: 6px;

  background: ${theme.colors.gray02};
  border: 1px solid ${theme.colors.gray03};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.gray05};
  ${theme.typography.medium04};

  cursor: pointer;
`;
