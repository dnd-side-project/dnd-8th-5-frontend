export default function IconChevronLeft({ fill }: { fill?: string }) {
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
        d="m15.872 6.342-5.675 5.69 5.675 5.689-1.38 1.382L7.44 12.03l7.052-7.071z"
        clipRule="evenodd"
      />
    </svg>
  );
}
