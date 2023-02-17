import styled from '@emotion/styled';
import theme from '../../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${theme.colors.gray3};
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  z-index: 2;
  position: sticky;
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
  width: 24px;
  height: 24px;

  margin: 0 28px 0 auto;
  z-index: 3;

  cursor: pointer;
`;
