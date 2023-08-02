import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useParams } from 'react-router-dom';
import { isTooltipShownState } from '../../atoms/isTooltipShownAtoms';

import Menu from '../menu/Menu';
import { ROUTES } from '../../constants/ROUTES';
import share from '../../assets/icons/share.svg';
import headerMenu from '../../assets/icons/headerMenu.svg';
import headerInfo from '../../assets/icons/headerInfo.svg';
import { Icon, IconWrapper, Title, Wrapper } from './Header.styles';

import CopyToClipboard from 'react-copy-to-clipboard';

const Header = ({ pageName, title }: { pageName: string; title: string }) => {
  const { roomUUID } = useParams();
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const [, setIsTooltipShown] = useRecoilState(isTooltipShownState);

  const handleMenuClick = () => {
    setIsMenuOpened(true);
  };

  return (
    <Wrapper>
      <Title>{title.slice(0, 16)}</Title>

      <IconWrapper pageName={pageName}>
        {pageName !== ROUTES.ADD_TIME && (
          <Icon src={headerMenu} alt="menu" onClick={handleMenuClick} />
        )}

        {pageName === ROUTES.ADD_TIME ||
          (pageName === ROUTES.RESULT && (
            <Icon
              src={headerInfo}
              alt="share"
              onClick={() => setIsTooltipShown(true)}
            />
          ))}

        {pageName === ROUTES.CURRENT && (
          <CopyToClipboard
            text={`${window.location.origin}/invite/${roomUUID}`}
            onCopy={() => alert('클립보드에 복사되었습니다.')}
          >
            <Icon src={share} alt="share" />
          </CopyToClipboard>
        )}
      </IconWrapper>

      {isMenuOpened && <Menu setIsMenuOpened={setIsMenuOpened} />}
    </Wrapper>
  );
};

export default Header;
