import styled from '@emotion/styled';
import theme from '../../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${theme.color.gray3};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  width: 228px;
  margin: 0 auto;
  text-align: center;

  color: ${theme.color.gray7};
  ${theme.typography.system_2_semibold};
`;

export const ShareIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
