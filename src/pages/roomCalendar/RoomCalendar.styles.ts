import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const MainContainer = styled.div`
  width: 100%;
  height: 812px;
  max-width: 412px;
  position: relative;
  left: 0;
  right: 0;
  background-color: ${theme.colors.gray01};
  margin: 0 auto;
  overflow-x: hidden;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  top: 33px;
  left: 20px;
  width: 100%;
  height: 116px;
`;

export const Line = styled.img`
  position: absolute;
  top: 482px;
  width: 100%;
`;

export const TimePickerContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 495px;
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
  width: 100%;
  height: 48px;
  z-index: 2;
  background-color: ${theme.colors.gray02};
  top: 42px;
`;

export const DependingBox = styled.div`
  position: absolute;
  z-index: 4;
  background-color: rgba(256, 256, 256, 0.6);
  width: 100%;
  height: 130px;
`;

export const CheckBoxContainer = styled.div`
  position: absolute;
  top: 625px;
  width: 100%;
  height: 152px;
  padding: 20px;
  padding-bottom: 50px;
`;

export const BottomButtonContainer = styled.div`
  position: absolute;
  z-index: 100;
`;
