import styled from '@emotion/styled';
import theme from '../../../styles/theme';

import { bottomButton } from '../../../types/commons/bottomButton';

const BottomButton = ({ text }: bottomButton) => {
  return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 52px;
  border-radius: 6px;

  color: ${theme.color.gray1};
  background: ${theme.color.purple5};
  ${theme.typography.system_2_semibold};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default BottomButton;
