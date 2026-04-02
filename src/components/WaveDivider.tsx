export function WaveDivider({
  flip = false,
  className = "",
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative h-12 w-full overflow-hidden text-eds-blue/25 ${className}`}
      aria-hidden
    >
      <svg
        className={`absolute bottom-0 left-0 h-full w-[200%] ${flip ? "scale-x-[-1]" : ""}`}
        preserveAspectRatio="none"
        viewBox="0 0 1200 48"
        fill="currentColor"
      >
        <path d="M0 32c150-20 300-20 450 0s300 20 450 0 300-20 450 0V48H0V32z" />
        <path
          opacity="0.65"
          d="M0 38c180-12 360-12 540 0s360 12 540 0 360-12 540 0V48H0V38z"
        />
      </svg>
    </div>
  );
}
