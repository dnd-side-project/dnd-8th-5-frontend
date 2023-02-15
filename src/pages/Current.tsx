import styled from '@emotion/styled';
import Header from '../components/commons/header/Header';

const Current = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 375px;
  height: 812px;
  border: 1px solid grey;

  overflow: auto;
`;

export default Current;
