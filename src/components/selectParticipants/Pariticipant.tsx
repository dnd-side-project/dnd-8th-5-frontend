import styled from '@emotion/styled';
import theme from '../../styles/theme';

const Participant = ({
  id,
  isSelected,
  onClick,
}: {
  id: string;
  onClick: any;
  isSelected: boolean;
}) => {
  return (
    <Wrapper id={id} onClick={onClick} isSelected={isSelected}>
      {id}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isSelected: boolean }>`
  height: 36px;

  padding: 8px 20px;
  border-radius: 38px;

  ${theme.typography.medium04};

  border: ${({ isSelected }) =>
    isSelected
      ? `1px solid ${theme.colors.gray01}`
      : `1px solid ${theme.colors.gray03}`};
  color: ${({ isSelected }) =>
    isSelected ? theme.colors.gray01 : theme.colors.gray06};
  background: ${({ isSelected }) =>
    isSelected ? theme.colors.purple06 : theme.colors.gray01};

  cursor: pointer;
`;

export default Participant;
