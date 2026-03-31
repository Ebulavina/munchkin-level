export function MaleIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={10}
        cy={14}
        r={5}
        stroke={color}
        strokeWidth={2}
      />
      <path
        d="M14 10l5-5M15 5h4v4"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
