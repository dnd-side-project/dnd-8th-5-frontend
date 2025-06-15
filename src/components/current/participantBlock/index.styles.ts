import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.button<{
  participant: string;
  isSelected?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 62px;
  height: 29px;

  border-radius: 4px;
  background: ${({ isSelected }) =>
    isSelected ? '#fae1e1' : theme.colors.gray02};
  ${theme.typography.semibold06};

  color: ${({ participant, isSelected }) =>
    participant === '?'
      ? `${theme.colors.gray04}`
      : isSelected
      ? '#6d6d6d'
      : theme.colors.purple06};

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;
