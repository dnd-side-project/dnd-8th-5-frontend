import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const MainContainer = styled.div`
  position: relative;
  display: flex;

  width: 100%;
  height: calc(100vh + 90px);
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

export const TimePickerContainer = styled.div<{ numCalendarLows: number }>`
  position: absolute;
  top: ${({ numCalendarLows }) => (numCalendarLows === 6 ? '450px' : '500px')};
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

export const CheckBoxContainer = styled.div<{ numCalendarLows: number }>`
  position: absolute;
  width: 100%;
  height: 200px;
  top: ${({ numCalendarLows }) => (numCalendarLows === 6 ? '575px' : '625px')};
  padding: 20px;
  padding-bottom: 50px;
`;
