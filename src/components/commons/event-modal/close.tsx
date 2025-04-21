import * as React from 'react';

export function IconClose({ size, fill }: { size: number; fill: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 31 30"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M22.141 8.518a.833.833 0 0 1 0 1.179L10.356 21.482a.833.833 0 0 1-1.179-1.179L20.962 8.518a.833.833 0 0 1 1.179 0"
        clipRule="evenodd"
      ></path>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M9.177 8.518a.833.833 0 0 1 1.179 0L22.14 20.303a.833.833 0 0 1-1.178 1.179L9.176 9.697a.833.833 0 0 1 0-1.179"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
