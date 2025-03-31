import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  margin: 0 auto;
  padding: 48px 0 0px 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Body = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 0 90px 0;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const Border = styled.div`
  width: 100%;
  height: 8px;

  margin-top: 32px;
  margin-right: auto;
  margin-left: auto;

  background: ${theme.colors.gray02};
`;

export const Title = styled.div`
  margin-top: 32px;

  color: ${theme.colors.gray07};
  ${theme.typography.semibold02};
`;

export const Subtitle = styled.div`
  margin-top: 6px;

  color: ${theme.colors.gray05};
  ${theme.typography.medium04};
`;

export const Participants = styled.div`
  width: 100%;
  margin-top: 16px;

  display: flex;
  flex-wrap: wrap;
  row-gap: 6px;
  column-gap: 5px;
`;

export const TableWrapper = styled.div`
  margin-top: 26px;
  overflow-y: hidden;
  position: relative;

  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BottomWrapper = styled.div`
  width: 100%;
  max-width: 412px;
  height: 0.1px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 8px;
  position: absolute;
  right: 20px;
  bottom: calc(90px + 8px);
`;

export const EditButton = styled.button<{
  isScrollUp: boolean;
  isScrollDown: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ isScrollUp }) => (isScrollUp ? 0 : '8px')};
  padding: ${({ isScrollUp }) => (isScrollUp ? '14px' : '12px 14px')};
  border-radius: 100px;
  background: #3c53ff;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.1));

  img {
    width: ${({ isScrollUp }) => (isScrollUp ? '26px' : '18px')};
    height: ${({ isScrollUp }) => (isScrollUp ? '26px' : '18px')};
  }

  span {
    color: white;
    ${theme.typography.medium04};
    white-space: nowrap;
    overflow: hidden;
    opacity: ${({ isScrollUp }) => (isScrollUp ? 0 : 1)};
    max-width: ${({ isScrollUp }) => (isScrollUp ? '0px' : '100px')};
    transition: opacity 0.3s ease-in-out, max-width 0.3s ease-in-out;
  }
`;

export const AddButton = styled.button`
  width: 138px;
  height: 38px;
  border-radius: 4px;

  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);

  color: ${theme.colors.gray06};
  ${theme.typography.medium02};
  background: ${theme.colors.gray01};
  border: 1px solid ${theme.colors.gray06};

  display: flex;
  align-items: center;
  justify-content: center;
`;
