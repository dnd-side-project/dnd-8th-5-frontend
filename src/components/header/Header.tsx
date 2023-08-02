import { Icon, IconWrapper, Title, Wrapper } from './Header.styles';

import share from '../../assets/icons/share.svg';

import headerMenu from '../../assets/icons/headerMenu.svg';
import headerInfo from '../../assets/icons/headerInfo.svg';

import { useRecoilState } from 'recoil';
import { isTooltipShownState } from '../../atoms/isTooltipShownAtoms';

import { useParams } from 'react-router-dom';

import CopyToClipboard from 'react-copy-to-clipboard';
import Menu from '../menu/Menu';
import { useState } from 'react';

const Header = ({ pageName, title }: { pageName: string; title: string }) => {
  const { roomUUID } = useParams();

  const [, setIsTooltipShown] = useRecoilState(isTooltipShownState);

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMenuOpened(true);
  };

  const currentUrl = window.location.origin + '/invite/' + roomUUID;

  return (
    <Wrapper>
      <Title>{title.slice(0, 16)}</Title>

      <IconWrapper pageName={pageName}>
        {pageName !== 'addTime' && (
          <Icon src={headerMenu} alt="menu" onClick={handleMenuClick} />
        )}

        {pageName === 'addTime' && (
          <Icon
            src={headerInfo}
            alt="share"
            onClick={() => setIsTooltipShown(true)}
          />
        )}

        {(pageName === 'current' || pageName === 'result') && (
          <CopyToClipboard
            text={currentUrl}
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
