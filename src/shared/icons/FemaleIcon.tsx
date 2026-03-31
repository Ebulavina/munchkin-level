export function FemaleIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={12}
        cy={9}
        r={5}
        stroke={color}
        strokeWidth={2}
      />
      <path
        d="M12 14v6M9 18h6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}
