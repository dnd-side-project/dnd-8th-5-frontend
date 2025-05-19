import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 64px 0 0 0;
  overflow: auto;
`;

export const TimerContainr = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 32px 0 8px 0;
`;

export const TimerWrapper = styled.div`
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
  width: 100%;
  height: 332px;
  flex-direction: column;
  flex: 1;
  align-items: center;
  background-color: #f5f6ff;
  margin: 32px 0 0 0;
  padding: 0 20px 144px 20px;
`;

export const BottomHeaderWrapper = styled.div`
  width: 170px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const BottomHeaderText = styled.div`
  ${theme.typography.medium03}
`;

export const RecommendWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 94px;
  margin: 24px 0 0 0;
  gap: 12px;
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const RecommendBox = styled.div<{ value: boolean; isChecked: boolean }>`
  display: flex;
  width: calc(100% / 3 - 10px);
  height: 41px;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: ${({ value }) => value && `2px solid ${theme.colors.purple06}`};
  border-radius: 6px;
  color: ${theme.colors.purple06};
  color: ${(props) => (props.isChecked ? theme.colors.gray03 : 'none')};
  ${theme.typography.medium02};
  pointer-events: ${(props) => (props.isChecked ? 'none' : null)};
`;

export const CheckboxWrapper = styled.div`
  width: 100%;
  margin: 24px 0 0 0;
`;
