import styled from '@emotion/styled';
import theme from '../../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${theme.colors.gray3};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  position: absolute;

  width: 228px;

  margin: 0 auto;
  text-align: center;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: hidden;

  color: ${theme.colors.gray7};
  ${theme.typography.system_2_semibold};
`;

export const ShareIcon = styled.img`
  z-index: 2;

  width: 24px;
  height: 24px;
  margin: 0 28px 0 auto;
`;
