import { keyframes } from '@emotion/react';

export const slideUpAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const slideRightAnimation = keyframes`
    from {
        opacity: 0.5;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;
