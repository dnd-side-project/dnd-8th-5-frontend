import theme from '@/styles/theme';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Group = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const GroupInfo = styled.div`
  display: flex;
  ${theme.colors.gray07};
  ${theme.typography.medium01};
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 0px;
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`;

export const AccordionIcon = styled.img<{ isCollapsed: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ isCollapsed }) =>
    isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'};
`;

export const ItemWrapper = styled.div`
  padding: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoText = styled.div`
  color: #979797;
  ${theme.typography.medium05};

  .available {
    color: ${theme.colors.purple06};
  }

  .unavailable {
    color: ${theme.colors.orange02};
  }
`;

export const NameList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const NameBlock = styled.div`
  width: 46.5px;
  height: 24px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2.8px;
  ${theme.typography.medium05};
  color: ${theme.colors.gray05};
`;
