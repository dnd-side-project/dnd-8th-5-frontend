import { keyframes } from '@emotion/react';

export const flotingAnimation = keyframes`
0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
`;
