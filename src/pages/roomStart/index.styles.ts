import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 412px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.purple05};
  overflow: auto;
`;

export const Logo = styled.img`
  width: 100%;
  height: 36%;
  max-height: 333px;
  object-fit: cover;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: white;
  border-radius: 24px 24px 0 0;
  padding: 32px 20px 154px 20px;
`;

export const Header = styled.h1`
  width: 100%;
  margin: 0;
  padding: 0;
  ${theme.typography.semibold01};
`;

export const TagWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 6px;
  margin: 0 0 24px 0;
`;

export const Tag = styled.button<{ isSelected: boolean }>`
  width: 73px;
  height: 30px;
  margin: 8px 0 0 0;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${theme.typography.regular02};

  ${({ isSelected }) =>
    isSelected
      ? css`
          color: ${theme.colors.purple06};
          background: ${theme.colors.purple02};
        `
      : css`
          color: ${theme.colors.gray04};
          background: ${theme.colors.gray02};
        `}
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & + & {
    margin-top: 24px;
  }
`;

export const InputTitle = styled.div`
  ${theme.typography.regular01};
  color: ${theme.colors.gray05};
`;

export const Input = styled.input`
  height: 50px;
  border: 1px solid ${theme.colors.gray04};
  border-radius: 5px;
  padding: 15px;
  outline: none;
  &::placeholder {
    color: ${theme.colors.gray03};
  }
  &:focus {
    border: 1px solid ${theme.colors.purple04};
  }
`;

export const SelectWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-radius: 5px;
  border: 1px solid ${theme.colors.gray04};
  overflow: hidden;
`;

export const DependingBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(256, 256, 256, 0.7);
  z-index: 3;
`;

export const PeopleNumber = styled.div`
  ${theme.typography.medium01};
  color: ${theme.colors.gray06};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 75%;
  border-left: 1px solid ${theme.colors.gray04};
  border-right: 1px solid ${theme.colors.gray04};
`;

export const CountButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.typography.semibold01};
  height: 100%;
  width: 25%;
  border-radius: 5px;
  background-color: white;
`;

export const NextButton = styled.button``;

export const ChceckContainer = styled.div`
  width: 100%;
  margin: 10px 0 0 0;
`;

export const CheckListText = styled.div`
  font-family: Pretendard;
`;

export const CheckCircle = styled.img`
  width: 15px;
`;
