import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

export const MainContainer = styled.div`
  width: 100%;
  max-width: 412px;
  position: relative;
  left: 0;
  right: 0;
  height: calc(100vh);
  background: ${theme.colors.purple05};
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const Logo = styled.img`
  width: 100%;
  position: relative;
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 505px;
  position: absolute;
  bottom: 0px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Header = styled.div`
  position: absolute;
  top: 32px;
  width: 100%;
  height: 31px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  ${theme.typography.semibold01};
`;

export const TagWrapper = styled.div`
  position: absolute;
  top: 72px;
  width: 100%;
  margin-left: 20px;
  display: flex;
  column-gap: 6px;
`;

export const Tag = styled.button<{ isSelected: boolean }>`
  width: 73px;
  height: 30px;
  border-radius: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${theme.typography.medium04};

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

export const TitleInputContnainer = styled.div`
  position: absolute;
  top: 135px;
  width: 100%;
  height: 79px;
`;

export const NumberSelectContnainer = styled.div`
  position: absolute;
  width: 100%;
  height: 79px;
  display: flex;
  flex-direction: column;
  top: 233px;
  padding-left: 20px;
  padding-right: 20px;

  z-index: 2;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`;

export const DependingBox = styled.div<{ isNotDecided: boolean }>`
  position: absolute;
  width: 100%;
  height: 60px;
  background-color: rgba(256, 256, 256, 0.6);
  top: 22px;
  z-index: ${(props) => (props.isNotDecided ? 3 : 1)};
`;

export const SelectWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid ${theme.colors.gray04};
  border-bottom: 1px solid ${theme.colors.gray04};
  border-radius: 5px;
  z-index: 2;
  top: 28px;
  margin-right: 20px;
`;

export const InputTitle = styled.div`
  ${theme.typography.medium02};
  color: ${theme.colors.gray05};
  padding-bottom: 8px;
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

export const PeopleNumber = styled.div`
  ${theme.typography.medium01x};
  color: ${theme.colors.gray06};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 75%;
`;

export const CountButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.typography.semibold01};
  height: 100%;
  width: 25%;
  border-left: 1px solid ${theme.colors.gray04};
  border-right: 1px solid ${theme.colors.gray04};
  border-radius: 5px;
  background-color: white;
`;

export const NextButton = styled.button``;

export const ChceckContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 322px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CheckListText = styled.text`
  font-family: Pretendard;
`;

export const CheckCircle = styled.img`
  width: 15px;
`;

export const BottomButtonContainer = styled.div`
  position: absolute;
  z-index: 5;
`;
