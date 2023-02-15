import styled from '@emotion/styled';
import theme from '../../styles/theme';

const ParticipantsBlock = () => {
  return (
    <Wrapper>
      <Span>김주현</Span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 38px;
  height: 17px;
  padding: 6px 13px;
  border-radius: 4px;
  background: ${theme.color.gray2};
`;

const Span = styled.span`
  color: ${theme.color.purple5};
  ${theme.typography.system_2_medium};
`;

export default ParticipantsBlock;
