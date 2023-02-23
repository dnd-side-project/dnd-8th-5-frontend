import styled from '@emotion/styled';

const AddTime = () => {
  return <Wrapper></Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding-bottom: 108px;

  border: 1px solid gray;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default AddTime;
