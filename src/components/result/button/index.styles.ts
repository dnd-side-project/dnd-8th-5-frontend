import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 462px;
  height: 117px;

  position: fixed;
  z-index: 3;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Bubble = styled.img`
  width: 142px;
  height: 27px;
  margin-left: 20px;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  height: 90px;
  border-top: 1px solid ${theme.colors.gray02};

  background: ${theme.colors.gray01};

  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 20px 28px 20px;
`;

export const CurrentButtonWrapper = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.gray01};

  filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.1));
  cursor: pointer;
`;

export const CurrentButton = styled.img`
  width: 24px;
  height: 24px;
`;

export const BottomButton = styled.button`
  height: 52px;
  border-radius: 6px;

  ${theme.typography.medium01};
  color: ${theme.colors.gray01};
  background: ${theme.colors.purple06};

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 8px;
`;

export const ShareButton = styled.img`
  width: 20px;
  height: 20px;
`;
