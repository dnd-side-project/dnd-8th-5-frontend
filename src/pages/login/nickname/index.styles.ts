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
  height: 40%;
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

export const H1 = styled.h1`
  margin: 0;
  ${theme.typography.semibold01};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 54px;
  min-height: 54px;
  flex: 1;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0 0 0;
  padding: 14px 16px;
  border-radius: 6px;
  border: 1px solid ${theme.colors.gray03};

  div {
    display: flex;
    align-items: center;
    gap: 3px;
    width: 100%;
  }

  button {
    padding: 3px 8px;
    border-radius: 4px;
    color: ${theme.colors.gray05};
    background: ${theme.colors.gray025};
    ${theme.typography.medium04};
    flex-shrink: 0;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
  }
`;

export const InputHelperText = styled.span`
  color: ${theme.colors.gray04};
  ${theme.typography.medium03};
`;

export const ErrorMessage = styled.span`
  color: ${theme.colors.red02};
  ${theme.typography.regular02};
`;

export const Bottom = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 20px;
  height: 90px;
  background: ${theme.colors.gray01};
  border-top: 1px solid ${theme.colors.gray02};

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 52px;
    border-radius: 6px;
    color: ${theme.colors.gray01};
    background: ${theme.colors.purple06};
    ${theme.typography.semibold03};
  }
`;
