import { Icon, IconWrapper, Title, Wrapper } from './Header.styles';

import share from '../../assets/icons/share.svg';
import emailDefault from '../../assets/icons/emailDefault.svg';
import emailRegistered from '../../assets/icons/emailRegistered.svg';
import headerMenu from '../../assets/icons/headerMenu.svg';
import headerInfo from '../../assets/icons/headerInfo.svg';

import { useRecoilState } from 'recoil';
import { emailState } from '../../atoms/emailAtoms';
import { availableGuideState } from '../../atoms/availableGuideAtoms';

import CopyToClipboard from 'react-copy-to-clipboard';
import Menu from '../menu/Menu';
import { useState } from 'react';

const Header = ({ pageName, title }: { pageName: string; title: string }) => {
  const [isEmailRegistered, setIsEmailRegistered] = useRecoilState(emailState);
  const [availableGuide, setAvailbleGuide] =
    useRecoilState(availableGuideState);

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMenuOpened(true);
  };

  const currentUrl = window.location.href;

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
            onClick={() => setAvailbleGuide(true)}
          />
        )}

        {pageName === 'result' && (
          <Icon
            src={isEmailRegistered ? emailRegistered : emailDefault}
            alt={isEmailRegistered ? 'email registered' : 'email default'}
          />
        )}

        {pageName === 'current' && (
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
