import { MainContainer, IndexText, TitleText } from './RoomHeader.styles';
interface RoomHeaderTypes {
  index: string;
  title: string;
  bottomSheet: boolean;
}

const RoomHeader = ({ index, title, bottomSheet }: RoomHeaderTypes) => {
  return (
    <MainContainer>
      <IndexText>{index}</IndexText>
      <TitleText isBottomSheet={bottomSheet}>{title}</TitleText>
    </MainContainer>
  );
};

export default RoomHeader;
