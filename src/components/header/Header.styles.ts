import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  height: 48px;
  border-bottom: 1px solid ${theme.colors.gray03};
  background: ${theme.colors.gray01};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  position: absolute;
  width: 234px;

  white-space: nowrap;
  overflow: hidden;

  margin: 0 auto;
  text-align: center;

  color: ${theme.colors.gray07};
  ${theme.typography.semibold03};
`;

export const IconWrapper = styled.div<{ pageName: string }>`
  width: 100%;
  height: 100%;
  padding: 0 20px;

  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: ${({ pageName }) =>
    pageName === 'addTime' ? 'flex-end' : 'space-between'};
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;

  cursor: pointer;
`;
