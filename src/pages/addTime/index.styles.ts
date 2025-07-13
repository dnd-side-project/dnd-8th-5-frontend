import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 60px 0 0 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TitleWrapper = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  & + & {
    margin-top: 12px;
  }
`;

export const Title = styled.span`
  color: ${theme.colors.gray07};
  ${theme.typography.semibold02};
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: 24px 0 0 0;
  padding-bottom: 116px;
`;
