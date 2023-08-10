import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

export const List = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid ${theme.colors.gray02};

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${theme.typography.medium04}
  color: ${({ isSelected }) =>
    isSelected ? theme.colors.purple06 : theme.colors.gray06};
`;

export const Check = styled.img<{ isSelected: boolean }>`
  width: 20px;
  height: 20px;

  display: ${({ isSelected }) => (isSelected ? 'visible' : 'none')};
`;
