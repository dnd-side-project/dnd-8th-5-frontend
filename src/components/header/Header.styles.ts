import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  height: 48px;
  border-bottom: 1px solid ${theme.colors.gray03};
  background: #ffffff;

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

export const ShareIcon = styled.img`
  width: 24px;
  height: 24px;

  margin: 0 28px 0 auto;
  z-index: 3;

  cursor: pointer;
`;
