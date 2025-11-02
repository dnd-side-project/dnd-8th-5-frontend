import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: fixed;
  z-index: 4;
  top: 0;
  width: 100%;
  height: 64px;
  background: #fff;
  max-width: 462px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  gap: 16px;

  img {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: flex;
  flex: 1;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.gray07};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
`;

export const Blank = styled.div`
  width: 20px;
  height: 20px;
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 3px;
  background: ${theme.colors.gray02};
`;

export const ProgressBar = styled.div<{
  precentage: number;
}>`
  display: flex;
  width: ${(props) => props.precentage}%;
  height: 3px;
  background: linear-gradient(
    90deg,
    rgba(120, 108, 255, 1) 0%,
    rgba(108, 125, 255, 1) 100%
  );
  transition: width 0.5s ease-in-out;
`;
