export function CrownIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 18h18v2H3v-2ZM4 17l2-9 4 4 2-8 2 8 4-4 2 9H4Z"
        fill={color}
      />
    </svg>
  );
}
