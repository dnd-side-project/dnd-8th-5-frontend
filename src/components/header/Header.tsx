import { ShareIcon, Title, Wrapper } from './Header.styles';

import share from '../../assets/icons/share.svg';
import room from '../../assets/data/room.json';

const Header = () => {
  return (
    <Wrapper>
      <Title>{room.title.slice(0, 16)}</Title>
      <ShareIcon src={share} alt="share" />
    </Wrapper>
  );
};

export default Header;
