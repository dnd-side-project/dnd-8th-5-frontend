import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 375px;
  height: 17px;
  border-radius: 61px;
  background: ${theme.colors.gray02};
`;

export const Bar = styled.div<{
  headCount: number;
  participantsNumber: number;
}>`
  width: ${({ headCount, participantsNumber }) =>
    headCount ? `${(participantsNumber / headCount) * 100}%` : 0};
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
        headCount ? `${(participantsNumber / headCount) * 100}%` : 0};
    }
  }
`;

export const RabbitWrapper = styled.div`
  width: 100%;
  max-width: 375px;
  margin-top: 17px;

  position: relative;
  display: flex;
  align-items: flex-end;
`;

export const Proportion = styled.div`
  margin-bottom: 4px;
  margin-left: auto;

  color: ${theme.colors.gray05};
  ${theme.typography.medium05};

  position: absolute;
  z-index: 3;
  right: 0;
  bottom: 0;
`;

export const Span = styled.span`
  color: ${theme.colors.purple06};
  ${theme.typography.medium05};
`;

export const Rabbit = styled.img<{ position: number }>`
  height: 54px;
  position: relative;
  /* left: ${({ position }) => `${position * 335}px`}; */
  left: 0;
  bottom: 0;

  z-index: 2;
`;
