export function HIPAABadge() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 flex h-20 w-[107px] items-center justify-center">
        <svg
          width="80"
          height="60"
          viewBox="0 0 80 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Caduceus symbol */}
          <path
            d="M40 5L40 55"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M30 15L50 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M25 25C25 20 30 15 35 15C40 15 45 20 45 25C45 30 40 35 35 35C30 35 25 30 25 25Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M35 25C35 20 40 15 45 15C50 15 55 20 55 25C55 30 50 35 45 35C40 35 35 30 35 25Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M40 35L40 45"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M35 50L45 50"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <span className="text-sm font-medium uppercase text-white">
        HIPAA COMPLIANT
      </span>
    </div>
  );
}
