import { MainContainer, IndexText, TitleText } from './RoomHeader.styles';
interface RoomHeader {
  index: string;
  title: string;
}

const RoomHeader = ({ index, title }: RoomHeader) => {
  return (
    <MainContainer>
      <IndexText>{index}</IndexText>
      <TitleText>{title}</TitleText>
    </MainContainer>
  );
};

export default RoomHeader;
