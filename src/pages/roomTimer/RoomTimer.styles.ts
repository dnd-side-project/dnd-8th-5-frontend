import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 412px;
  height: 100vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: hidden;

  @media screen and (max-height: 667px) {
    height: calc(100vh + 90px);
  }
`;

export const HeaderContainer = styled.div`
  position: absolute;
  top: 33px;
  width: 100%;
  height: 116px;
  left: 20px;
  margin-bottom: 34px;
`;

export const TimerContainr = styled.div`
  position: absolute;
  display: flex;
  top: 176px;
  width: 100%;
  justify-content: center;
  margin-bottom: 0px;
  z-index: 1;
`;

export const TImerWrapper = styled.div`
  width: 100%;
  position: absolute;
  background-color: ${theme.colors.gray01};
  z-index: 2;
`;

export const DependingBox = styled.div<{ value: number }>`
  width: 100%;
  height: 190px;
  background-color: rgba(256, 256, 256, 0.6);
  z-index: ${(props) => props.value};
`;

export const BottomContainer = styled.div`
  display: flex;
  position: absolute;
  top: 435px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;
  background-color: #f5f6ff;
  z-index: 2;
`;

export const BottomHeaderWrapper = styled.div`
  position: absolute;
  width: 170px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  z-index: 2;
`;

export const BottomHeaderText = styled.div`
  z-index: 2;
  ${theme.typography.medium03}
`;

export const RecommendWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 62px;
  width: 100%;
  padding-inline: 20px;
  height: 94px;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 2;
`;

export const RecommendBox = styled.div<{ value: boolean; isChecked: boolean }>`
  display: flex;
  width: calc(100% / 3 - 10px);
  height: 41px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.value ? theme.colors.purple05 : theme.colors.gray01};
  border-radius: 6px;
  color: ${(props) =>
    props.value ? theme.colors.gray01 : theme.colors.purple06};
  color: ${(props) => (props.isChecked ? theme.colors.gray03 : 'none')};
  ${theme.typography.medium02};
  margin-bottom: 12px;
  pointer-events: ${(props) => (props.isChecked ? 'none' : null)};
`;

export const CheckboxWrapper = styled.div`
  position: absolute;
  top: 180px;
  width: 100%;
  padding-inline: 20px;
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
