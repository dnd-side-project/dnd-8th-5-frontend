import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const MainContainer = styled.div`
  position: relative;
  left: 0;
  right: 0;
  height: 100%;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  position: absolute;
  top: 33px;
  left: 20px;
  width: 333px;
  height: 116px;
  margin-bottom: 34px;
`;

export const TimerContainr = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 176px;
  width: 100%;
  z-index: 1;
  margin-bottom: 0px;
`;

export const TImerWrapper = styled.div`
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
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 332px;
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
  justify-content: space-between;
  width: 335px;
  height: 94px;
  top: 62px;
  flex-wrap: wrap;
  z-index: 2;
`;

export const RecommendBox = styled.div<{ value: boolean; isChecked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 104px;
  height: 41px;
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
`;

export const BottomButtonContainer = styled.div`
  position: absolute;
  z-index: 100;
`;
