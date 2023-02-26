import styled from '@emotion/styled';
import theme from '../../styles/theme';

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

const MainContainer = styled.div`
  width: 333px;
  height: 116px;
  padding: 20px;
`;

const IndexText = styled.div`
  padding-bottom: 10px;
  ${theme.typography.semibold04}
`;

const TitleText = styled.div`
  ${theme.typography.semibold01}
  white-space: pre-wrap;
`;

export default RoomHeader;
