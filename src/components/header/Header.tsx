import { ShareIcon, Title, Wrapper } from './Header.styles';
import { roomTitle } from '../../types/roomInfo';

import share from '../../assets/icons/share.svg';

const Header = ({ title }: roomTitle) => {
  return (
    <Wrapper>
      <Title>{title.slice(0, 16)}</Title>
      <ShareIcon src={share} alt="share" />
    </Wrapper>
  );
};

export default Header;
