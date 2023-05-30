import { keyframes } from '@emotion/react';

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
