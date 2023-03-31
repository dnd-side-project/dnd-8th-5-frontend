import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const MainContainer = styled.div<{ value: boolean }>`
  width: 100%;
  height: 38px;
  background-color: white;
  color: ${(props) =>
    props.value ? theme.colors.purple06 : theme.colors.gray06};
  border: 1px solid
    ${(props) => (props.value ? theme.colors.purple04 : '#EEEEEE')};
  border-radius: 6px;
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.div`
  ${theme.typography.medium04}
`;

export const Icon = styled.img`
  width: 18px;
  margin-left: 15px;
  margin-right: 7px;
`;
