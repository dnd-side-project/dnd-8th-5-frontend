import styled from '@emotion/styled';
import theme from '../../styles/theme';
import { participant } from '../../types/roomInfo';

const ParticipantsBlock = ({ participant }: participant) => {
  return <Wrapper>{participant}</Wrapper>;
};

const Wrapper = styled.div`
  width: 63px;
  height: 29px;
  padding: 6px 7.5px;
  text-align: center;

  border-radius: 4px;
  color: ${theme.color.purple5};
  background: ${theme.color.gray2};
  ${theme.typography.system_2_medium};
`;

export default ParticipantsBlock;
