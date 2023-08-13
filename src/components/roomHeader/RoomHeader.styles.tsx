import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const MainContainer = styled.div`
  width: 100%;
  max-width: 375px;
`;

export const IndexText = styled.div`
  padding-bottom: 10px;
  ${theme.typography.semibold04}
`;

export const TitleText = styled.div<{ isBottomSheet: boolean }>`
  ${(props) =>
    props.isBottomSheet
      ? theme.typography.semibold02
      : theme.typography.semibold01};
  white-space: pre-wrap;
`;
