import { tooltipState } from '@/atoms/tooltipAtom';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

import headerInfo from '@/assets/icons/headerInfo.svg';
import headerMenu from '@/assets/icons/headerMenu.svg';
import share from '@/assets/icons/share.svg';
import Menu from '../menu';
import { Icon, IconWrapper, Title, Wrapper } from './index.styles';

import useShareLink from '@/hooks/useShareLink';

const Header = ({
  pageName,
  title,
  roomId,
}: {
  pageName: string;
  title: string;
  roomId: string;
}) => {
  const { handleCopyToClipBoard } = useShareLink(roomId, title);

  const [, setIsTooltipShown] = useRecoilState(tooltipState);

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const handleMenuClick = () => {
    setIsMenuOpened(true);
  };

  return (
    <Wrapper>
      <Title>{title.slice(0, 16)}</Title>

      <IconWrapper pageName={pageName}>
        {pageName === '/addTime' ? (
          <>
            <div />
            <Icon
              src={headerInfo}
              alt="share"
              onClick={() => {
                setIsTooltipShown(true);
              }}
            />
          </>
        ) : (
          <>
            <Icon src={headerMenu} alt="menu" onClick={handleMenuClick} />
            <Icon src={share} alt="share" onClick={handleCopyToClipBoard} />
          </>
        )}
      </IconWrapper>

      {isMenuOpened && <Menu setIsMenuOpened={setIsMenuOpened} />}
    </Wrapper>
  );
};

export default Header;
