export function GooglePlayBadge() {
  return (
    <a
      href="#"
      className="flex h-10 w-[135px] items-center rounded-[5px] border border-white px-2.5 transition-all duration-200 hover:scale-105"
    >
      <div className="flex items-center space-x-2">
        <div className="flex h-6 w-6 items-center justify-center">
          <svg
            width="23"
            height="26"
            viewBox="0 0 23 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1.5L21.5 13L1.5 24.5V1.5Z"
              fill="url(#googlePlayGradient)"
              stroke="black"
              strokeWidth="1"
            />
            <defs>
              <linearGradient
                id="googlePlayGradient"
                x1="13.96"
                y1="6.25"
                x2="13.96"
                y2="19.75"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#32A071" />
                <stop offset="0.16" stopColor="#2DA771" />
                <stop offset="0.5" stopColor="#15CF74" />
                <stop offset="0.86" stopColor="#06E775" />
                <stop offset="1" stopColor="#00F076" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] leading-3 text-white">GET IT ON</span>
          <span className="text-sm font-medium leading-4 text-white">
            Google Play
          </span>
        </div>
      </div>
    </a>
  );
}

export function AppStoreBadge() {
  return (
    <a
      href="#"
      className="flex h-10 w-[120px] items-center rounded-[7px] border border-white px-2.5 transition-all duration-200 hover:scale-105"
    >
      <div className="flex items-center space-x-2">
        <div className="flex h-6 w-6 items-center justify-center">
          <svg
            width="18"
            height="22"
            viewBox="0 0 18 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 6.5C14.5 3.46243 12.0376 1 9 1C5.96243 1 3.5 3.46243 3.5 6.5C3.5 9.53757 5.96243 12 9 12C12.0376 12 14.5 9.53757 14.5 6.5Z"
              fill="white"
            />
            <path
              d="M9 13C4.58172 13 1 16.5817 1 21H17C17 16.5817 13.4183 13 9 13Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] leading-3 text-white">
            Download on the
          </span>
          <span className="text-sm font-medium leading-4 text-white">
            App Store
          </span>
        </div>
      </div>
    </a>
  );
}
