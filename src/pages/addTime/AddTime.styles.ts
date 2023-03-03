import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  display: block;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;

  width: 100%;
  max-width: 375px;
  height: 100%;
`;

export const Body = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const TitleWrapper = styled.div`
  padding: 0 20px;

  display: flex;
  align-items: center;

  & + & {
    margin-top: 14px;
  }
`;

export const Title = styled.span`
  color: ${theme.colors.gray07};
  ${theme.typography.semibold02};
`;

export const Main = styled.div`
  width: 100%;
  padding-top: 5px;

  margin-top: 43px;
  padding-bottom: 116px;

  display: flex;
  justify-content: space-between;

  position: relative;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0 15px;

  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 2;
  top: 0;
  overflow: visible;
`;

export const MoveButton = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  filter: drop-shadow(0px 3px 9px rgba(0, 0, 0, 0.1));

  cursor: pointer;
`;

export const TableWrapper = styled.div`
  padding-bottom: 32px;
  margin: 0 auto;
  overflow-y: auto;
  overscroll-behavior: contain;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
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

export const ScrollbarThumb = styled.div`
  width: 100%;
  height: 55px;
  border-radius: 41px;
  background: ${theme.colors.purple05};

  position: absolute;
  width: 18px;
`;
