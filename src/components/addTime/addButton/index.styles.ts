import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 412px;
  height: 90px;

  position: fixed;
  z-index: 3;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  border-top: 1px solid ${theme.colors.gray02};

  background: ${theme.colors.gray01};

  display: flex;
  justify-content: space-between;
  padding: 10px 20px 28px 20px;
`;

export const ResetButtonWrapper = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.gray01};

  filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.1));
  cursor: pointer;
`;

export const ResetButton = styled.img`
  width: 20px;
  height: 20px;
`;

export const ResetText = styled.span`
  color: ${theme.colors.gray05};
  ${theme.typography.medium06};
`;

export const BottomButton = styled.button`
  width: 273px;
  height: 52px;
  border-radius: 6px;

  ${theme.typography.semibold03};
  color: ${theme.colors.gray01};
  background: ${theme.colors.purple06};

  display: flex;
  align-items: center;
  justify-content: center;
`;
