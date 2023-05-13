import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 412px;
  left: 0;
  right: 0;
  background-color: ${theme.colors.gray01};
  margin: 0 auto;
  overflow-x: hidden;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  top: 33px;
  width: 100%;
  height: 116px;
  left: 20px;
`;

export const Line = styled.img`
  position: absolute;
  top: 482px;
  width: 100%;
  padding-inline: 20px;
`;

export const TimePickerContainer = styled.div`
  position: absolute;
  top: 495px;
  width: 100%;
  height: 135px;
  z-index: 1;
`;

export const TimePickerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const GreyBox = styled.div`
  position: absolute;
  top: 42px;
  width: 90%;
  height: 48px;
  z-index: 2;
  margin-inline: 20px;
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

export const CheckBoxContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 152px;
  top: 625px;
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
