import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const MainContainer = styled.div`
  width: 100%;
`;

export const IndexText = styled.div`
  padding-bottom: 10px;
  ${theme.typography.medium02}
`;

export const TitleText = styled.div<{ isBottomSheet: boolean }>`
  font-weight: 600;
  font-size: ${(props) => (props.isBottomSheet ? '20px' : '24px')};
  white-space: pre-wrap;
`;
