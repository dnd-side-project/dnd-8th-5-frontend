import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  display: block;
  position: fixed;
  margin: 0 auto;
  left: 0;
  right: 0;

  width: 100%;
  max-width: 412px;
  height: 100%;

  overflow: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Body = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const TitleWrapper = styled.div`
  padding: 0 20px;

  display: flex;
  align-items: center;

  & + & {
    margin-top: 14px;
  }
`;

export const Title = styled.span`
  color: ${theme.colors.gray07};
  ${theme.typography.semibold02};
`;

export const Main = styled.div`
  width: 100%;
  padding-top: 5px;

  margin-top: 43px;
  padding-bottom: 116px;

  display: flex;
  justify-content: space-between;

  position: relative;
`;
