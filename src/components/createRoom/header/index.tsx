import { MainContainer, IndexText, TitleText } from './index.styles';
interface RoomHeaderTypes {
  index: string;
  title: string;
  bottomSheet: boolean;
}

const Header = ({ index, title, bottomSheet }: RoomHeaderTypes) => {
  return (
    <MainContainer>
      <IndexText>{index}</IndexText>
      <TitleText isBottomSheet={bottomSheet}>{title}</TitleText>
    </MainContainer>
  );
};

export default Header;
