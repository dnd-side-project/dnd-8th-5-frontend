import { MainContainer, IndexText, TitleText } from './RoomHeader.styles';
interface RoomHeader {
  index: string;
  title: string;
}

const RoomHeader = (props: RoomHeader) => {
  return (
    <MainContainer>
      <IndexText>{props.index}</IndexText>
      <TitleText>{props.title}</TitleText>
    </MainContainer>
  );
};

export default RoomHeader;
