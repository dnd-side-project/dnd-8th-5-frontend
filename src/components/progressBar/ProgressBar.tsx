import styled from '@emotion/styled';
import theme from '../../styles/theme';

const ProgressBar = () => {
  return (
    <Wrapper>
      <Bar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 17px;
  border-radius: 61px;
  background: ${theme.color.gray2};
`;

const Bar = styled.div`
  width: 75%;
  height: 100%;
  background: linear-gradient(270deg, #6a7bff 1.48%, #cad0ff 100%);
  border-radius: 61px;

  animation: progressBar 1s ease-out;

  @keyframes progressBar {
    0% {
      width: 0%;
    }
    100% {
      width: 75%;
    }
  }
`;

export default ProgressBar;
