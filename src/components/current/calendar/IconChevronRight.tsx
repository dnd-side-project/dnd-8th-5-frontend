export default function IconChevronRight({ fill }: { fill?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill || '#000'}
        fillRule="evenodd"
        d="m16.56 12.031-7.053 7.072L8.13 17.72l5.674-5.69L8.13 6.342 9.507 4.96z"
        clipRule="evenodd"
      />
    </svg>
  );
}
