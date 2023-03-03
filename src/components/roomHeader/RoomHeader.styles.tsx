import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const MainContainer = styled.div`
  width: 333px;
  height: 116px;
  padding: 20px;
  padding-left: 0px;
`;

export const IndexText = styled.div`
  padding-bottom: 10px;
  ${theme.typography.semibold04}
`;

export const TitleText = styled.div`
  ${theme.typography.semibold01}
  white-space: pre-wrap;
`;
