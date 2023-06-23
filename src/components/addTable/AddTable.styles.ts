import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 2;
  top: 0;
`;

export const MoveButton = styled.img`
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
  filter: drop-shadow(0px 3px 9px rgba(0, 0, 0, 0.1));

  cursor: pointer;
`;

export const TableWrapper = styled.div`
  padding-bottom: 64px;
  margin: 0 auto;
  position: relative;
  height: 388px;

  overflow: hidden;
`;

export const ScrollbarTrack = styled.div`
  width: 18px;
  height: 160px;
  border-radius: 41px;
  background: ${theme.colors.gray02};
  position: absolute;
  right: 29px;
  top: 52px;
`;

export const ScrollbarThumb = styled.div<{ offsetY: number }>`
  width: 100%;
  height: 55px;
  border-radius: 41px;
  background: ${theme.colors.purple05};

  position: relative;
  top: ${({ offsetY }) => `${offsetY}px`};
  width: 18px;
`;
