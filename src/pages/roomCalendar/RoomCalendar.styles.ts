import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const MainContainer = styled.div`
  width: 375px;
  max-width: 375px;
  position: relative;
  left: 0;
  right: 0;
  background-color: ${theme.colors.gray01};
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  top: 33px;
  left: 20px;
  width: 333px;
  height: 116px;
`;

export const Line = styled.img`
  position: absolute;
  top: 462px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
`;

export const TimePickerContainer = styled.div`
  position: absolute;
  top: 475px;
  height: 135px;
  left: 0px;
  z-index: 1;
`;

export const TimePickerWrapper = styled.div`
  position: absolute;
  z-index: 3;
`;

export const GreyBox = styled.div`
  position: absolute;
  z-index: 2;
  background-color: ${theme.colors.gray02};
  width: 335px;
  height: 48px;
  top: 42px;
  left: 20px;
`;

export const DependingBox = styled.div`
  position: absolute;
  z-index: 4;
  background-color: rgba(256, 256, 256, 0.6);
  width: 335px;
  left: 20px;
  height: 130px;
`;

export const CheckBoxContainer = styled.div`
  position: absolute;
  top: 615px;
  left: 20px;
  height: 152px;
  margin: 0 auto;
  padding-bottom: 50px;
`;

export const BottomButtonContainer = styled.div`
  position: absolute;
  z-index: 100;
`;
