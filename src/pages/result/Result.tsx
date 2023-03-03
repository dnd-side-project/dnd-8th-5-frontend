import styled from '@emotion/styled';
import Header from '../../components/header/Header';
import theme from '../../styles/theme';

const Result = () => {
  return (
    <Wrapper>
      <Header />
      <Body>
        <TitleWrapper>
          <Title isNumber={false}>현재까지</Title>
          <Title isNumber={true}>6</Title>
          <Title isNumber={false}>명의</Title>
        </TitleWrapper>
        <TitleWrapper>
          <Title isNumber={false}>약속 조율 결과예요</Title>
        </TitleWrapper>
      </Body>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  border: 1px solid red;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Body = styled.div`
  width: 100%;
  padding: 0 20px;
  margin-top: 30px;
`;

export const TitleWrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
`;

export const Title = styled.span<{ isNumber: boolean }>`
  margin-left: ${({ isNumber }) => (isNumber ? `6px` : `0`)};
  ${theme.typography.semibold02};

  color: ${({ isNumber }) =>
    isNumber ? ` ${theme.colors.orange02}` : ` ${theme.colors.gray07}`};
`;

export default Result;
