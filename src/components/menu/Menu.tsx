import menuFavicon from '../../assets/icons/menuFavicon.png';
import menuPlus from '../../assets/icons/menuPlus.svg';
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
  Top,
  Wrapper,
} from './Menu.styles';

interface MenuTypes {
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ setIsMenuOpened }: MenuTypes) => {
  const navigate = useNavigate();

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  const goToRoom = () => {
    navigate('/');
  };

  return (
    <>
      <Overlay onClick={closeMenu} />
      <Side onClick={closeMenu} />
      <Wrapper>
        <Top>
          <Icon src={menuFavicon} alt="icon" />
        </Top>
        <Bottom>
          <PlusWrapper>
            <PlusIcon src={menuPlus} alt="add new promise" />
            <PlusText onClick={goToRoom}>약속 만들기</PlusText>
          </PlusWrapper>
          <FeedbackBtn>모두의 시간에게 피드백 보내기</FeedbackBtn>
        </Bottom>
      </Wrapper>
    </>
  );
};

export default Menu;
