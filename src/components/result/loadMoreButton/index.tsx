import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { PlusIcon } from './PlusIcon';
import { ButtonHTMLAttributes } from 'react';

export function LoadMoreButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button {...props}>
      <PlusIcon size={20} fill={theme.colors.gray05} />더 보기
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  gap: 2px;
  border-radius: 6px;
  color: ${theme.colors.gray05};
  background: ${theme.colors.gray02};
  ${theme.typography.semibold05};
`;
