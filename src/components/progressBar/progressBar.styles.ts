import styled from '@emotion/styled';
import theme from '../../styles/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 85px;
  margin-top: 16px;
`;

export const BarWrapper = styled.div`
  width: 100%;
  max-width: 412px;
  height: 17px;
  border-radius: 61px;
  background: ${theme.colors.gray02};
`;

export const BarCover = styled.div<{
  headCount: number;
  participantsNumber: number;
}>`
  width: ${({ headCount, participantsNumber }) =>
    headCount ? `${(participantsNumber / headCount) * 100}%` : 0};
  height: 100%;
  margin-top: 5px;

  border-radius: 61px;
  overflow: hidden;
`;

export const Bar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 61px;

  background: linear-gradient(270deg, #6a7bff 1.48%, #cad0ff 100%);

  animation: progressBar 1s ease-out;
  @keyframes progressBar {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const RabbitWrapper = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  align-items: flex-end;
`;

export const Proportion = styled.div`
  margin-bottom: 0px;
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

export const Rabbit = styled.img<{ leftPosition: number }>`
  width: 54px;
  height: 63px;

  position: relative;

  left: ${({ leftPosition }) => `${leftPosition}px`};
  filter: drop-shadow(0px 0px 11px rgba(106, 123, 255, 0.49));

  animation: rabbitPosition 1s ease-out;

  @keyframes rabbitPosition {
    0% {
      left: 0px;
    }
    100% {
      left: ${({ leftPosition }) => `${leftPosition}px`};
    }
  }
`;
