export default function SectionDivider() {
  return (
    <div className="relative h-16 sm:h-20 w-full overflow-hidden -mb-1">
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
      >
        <path
          d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"
          fill="rgb(5 150 105 / 0.08)"
        />
      </svg>
    </div>
  );
}
