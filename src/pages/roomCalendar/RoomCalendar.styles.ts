import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const MainContainer = styled.div`
  position: relative;
  display: flex;

  width: 100%;
  height: 100vh;
  max-width: 412px;
  left: 0;
  right: 0;
  background-color: ${theme.colors.gray01};
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: hidden;

  @media (max-height: 780px) {
    height: calc(100vh + 110px);
  }
`;

export const HeaderContainer = styled.div`
  position: absolute;
  top: 33px;
  width: 100%;
  height: 116px;
  left: 20px;
`;

export const Line = styled.img`
  top: 482px;
  width: 100%;
  padding-inline: 20px;
`;

export const TimePickerContainer = styled.div<{ weekLow: number }>`
  position: absolute;
  top: ${({ weekLow }) => (weekLow === 6 ? '450px' : '500px')};
  left: 20px;
  width: calc(100vw - 40px);
  max-width: 372px;
  height: 135px;
  z-index: 1;
  display: flex;
  border-top: 2px solid ${theme.colors.gray02};
  flex-direction: column;
  justify-content: center;
`;

export const TimePickerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const GreyBox = styled.div`
  top: 42px;
  width: 100%;
  height: 48px;
  z-index: 2;

  border-radius: 4px;
  background-color: ${theme.colors.gray02};
`;

export const DependingBox = styled.div`
  position: absolute;
  width: 100%;
  height: 130px;
  z-index: 4;
  background-color: rgba(256, 256, 256, 0.6);
`;

export const CheckBoxContainer = styled.div<{ weekLow: number }>`
  position: absolute;
  width: 100%;
  height: 200px;
  top: ${({ weekLow }) => (weekLow === 6 ? '575px' : '625px')};
  padding: 20px;
  padding-bottom: 50px;
`;

export const BottomButtonContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 412px;
  background: ${theme.colors.gray01};
  border-top: 2px solid ${theme.colors.gray02};
  z-index: 100;
`;
