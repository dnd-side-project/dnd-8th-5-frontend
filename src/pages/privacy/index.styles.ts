import styled from '@emotion/styled';
import theme from '@/styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 412px;
  margin: 0 auto;
  padding: calc(52px + 32px) 0 40px 0;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: auto;

  header {
    position: fixed;
    top: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 412px;
    height: 52px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${theme.colors.gray03};
    background: ${theme.colors.gray01};

    button {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 18px;
        height: 18px;
      }
    }

    h1 {
      margin: 0 auto;
      padding: 0;
      ${theme.typography.semibold03};
    }
  }

  main {
    padding: 0 16px;
  }

  p {
    ${theme.typography.medium03};
    color: ${theme.colors.gray06};
  }
`;

export const ItemWrapper = styled.div`
  padding: 0 20px 40px 20px;
  display: flex;
  flex-direction: column;

  ol {
    margin: 0;
  }

  ol > li {
    ${theme.typography.medium02};
    margin: 32px 0 0 0;
    line-height: 1.4;
    color: ${theme.colors.gray06};
  }

  ol > li > p {
    ${theme.typography.medium04};
    color: ${theme.colors.gray06};
    margin: 8px 0 0 0;
  }

  ol > li > ul > li {
    margin: 3px 0 0 12px;
    ${theme.typography.medium04};
    color: ${theme.colors.gray06};
  }

  ol > li > ul {
    margin: 8px 0 0 0;
  }

  li {
    ${theme.typography.regular01};
    color: ${theme.colors.gray06};
  }
`;
