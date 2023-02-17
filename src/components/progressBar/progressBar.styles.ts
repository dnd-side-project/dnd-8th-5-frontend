import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 17px;
  border-radius: 61px;
  background: ${theme.colors.gray2};
`;

export const Bar = styled.div<{
  headCount: number;
  participantsNumber: number;
}>`
  width: ${({ headCount, participantsNumber }) =>
    `${(participantsNumber / headCount) * 100}%`};
  height: 100%;
  background: linear-gradient(270deg, #6a7bff 1.48%, #cad0ff 100%);
  border-radius: 61px;

  animation: progressBar 1s ease-out;

  @keyframes progressBar {
    0% {
      width: 0%;
    }
    100% {
      width: ${({ headCount, participantsNumber }) =>
        `${(participantsNumber / headCount) * 100}%`};
    }
  }
`;
