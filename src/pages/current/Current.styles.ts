import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 412px;
  margin: 0 auto;
  padding-bottom: 108px;

  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Body = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  display: flex;
  flex-direction: column;
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
  height: 156px;
  margin: 0 auto;
  padding: 0 20px;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Edit = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50px;

  border: 1px solid ${theme.colors.purple06};
  background: ${theme.colors.gray01};
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.1));

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  margin: 0 0 0 auto;
`;

export const EditIcon = styled.img`
  width: 24px;
  height: 24px;
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
