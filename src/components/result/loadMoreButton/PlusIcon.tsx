import * as React from 'react';

export const PlusIcon = ({ size, fill }: { size: number; fill: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      fill={fill}
      d="M15.833 10.832h-5v5H9.167v-5h-5V9.165h5v-5h1.666v5h5z"
    ></path>
  </svg>
);
