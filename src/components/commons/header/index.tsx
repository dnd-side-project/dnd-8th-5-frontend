import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { tooltipState } from '@/atoms/tooltipAtom';

import Menu from '../menu';
import share from '@/assets/icons/share.svg';
import headerMenu from '@/assets/icons/headerMenu.svg';
import headerInfo from '@/assets/icons/headerInfo.svg';
import { Icon, IconWrapper, Title, Wrapper } from './index.styles';

import { ROUTES } from '@/constants/ROUTES';
import useShareLink from '@/hooks/useShareLink';

const Header = ({ pageName, title }: { pageName: string; title: string }) => {
  const { handleCopyToClipBoard } = useShareLink();

  const [, setIsTooltipShown] = useRecoilState(tooltipState);

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const handleMenuClick = () => {
    setIsMenuOpened(true);
  };

  return (
    <Wrapper>
      <Title>{title.slice(0, 16)}</Title>

      <IconWrapper pageName={pageName}>
        {pageName === ROUTES.ADD_TIME ? (
          <Icon
            src={headerInfo}
            alt="share"
            onClick={() => {
              setIsTooltipShown(true);
            }}
          />
        ) : (
          <>
            <Icon src={headerMenu} alt="menu" onClick={handleMenuClick} />
            <Icon
              src={share}
              alt="share"
              onClick={() => handleCopyToClipBoard()}
            />
          </>
        )}
      </IconWrapper>

      {isMenuOpened && <Menu setIsMenuOpened={setIsMenuOpened} />}
    </Wrapper>
  );
};

export default Header;
