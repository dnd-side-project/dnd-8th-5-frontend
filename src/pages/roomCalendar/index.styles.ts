import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${theme.colors.gray01};
  margin: 0 auto;
  padding: 64px 20px 135px 20px;
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: none;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border: 0.5px solid ${theme.colors.gray02};
  margin: 18px 0;
`;

export const TimePickerContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GreyBox = styled.div`
  position: absolute;
  width: 100%;
  height: 45px;
  border-radius: 4px;
  background-color: ${theme.colors.gray02};
`;

export const DependingBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: rgba(256, 256, 256, 0.6);
`;

export const CheckBoxContainer = styled.div`
  width: 100%;
  height: 200px;
  cursor: pointer;
  margin: 4px 0 0 0;
`;
