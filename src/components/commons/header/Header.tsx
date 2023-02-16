import styled from '@emotion/styled';
import theme from '../../../styles/theme';

import share from '../../../assets/icons/share.svg';
import { roomTitle } from '../../../types/roomInfo';

const Header = ({ title }: roomTitle) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ShareIcon src={share} alt="share" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  border-bottom: 1px solid ${theme.color.gray3};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  width: 228px;
  margin: 0 auto;
  text-align: center;

  color: ${theme.color.gray7};
  ${theme.typography.system_2_semibold};
`;

const ShareIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export default Header;
