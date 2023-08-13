import menuFavicon from '@/assets/icons/menuFavicon.png';
import menuPlus from '@/assets/icons/menuPlus.svg';
import menuExit from '@/assets/images/menuExit.png';

import { useNavigate } from 'react-router-dom';
import {
  Bottom,
  Icon,
  FeedbackBtn,
  Overlay,
  PlusIcon,
  PlusText,
  PlusWrapper,
  Side,
  Exit,
  Top,
  Wrapper,
} from './Menu.styles';
import { ROUTES } from '../../constants/ROUTES';

interface MenuTypes {
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ setIsMenuOpened }: MenuTypes) => {
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  const goToRoom = () => {
    navigate(`${ROUTES.LANDING}`);
  };

  return (
    <>
      <Overlay onClick={closeMenu} />
      <Side onClick={closeMenu} />
      <Wrapper>
        <Exit src={menuExit} alt="close menu" onClick={closeMenu} />

        <Top>
          <Icon src={menuFavicon} alt="icon" />
        </Top>
        <Bottom>
          <PlusWrapper>
            <PlusIcon src={menuPlus} alt="add new promise" />
            <PlusText onClick={goToRoom}>약속 만들기</PlusText>
          </PlusWrapper>
          <FeedbackBtn>
            <a href="https://forms.gle/TtLX6B1qihqoR27k6" target="_blank">
              모두의 시간에게 피드백 보내기
            </a>
          </FeedbackBtn>
        </Bottom>
      </Wrapper>
    </>
  );
};

export default Menu;
