import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  display: inline-block;
  box-sizing: content-box;

  height: 20px;
  padding: 6.5px 8px;
  border-radius: 4px;
  text-align: center;

  ${theme.typography.semibold05};
  color: ${theme.colors.purple06};
  background: ${theme.colors.purple02};

  & + & {
    margin-left: 6px;
  }
`;

export const Content = styled.div`
  display: flex;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  cursor: pointer;
`;

export const Unfold = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 3px;
`;
