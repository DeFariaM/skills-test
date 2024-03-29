export const GoogleDrive = ({ className }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Google Drive"
        role="img"
        viewBox="0 0 512 512"
        fill="#000000"
        className={className}
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <rect width="512" height="512" rx="15%" fill="#ffffff"></rect>{" "}
          <g fill="#2684fc">
            {" "}
            <path
              id="b"
              d="M337 301l53 96q-3 2-10 2h-247.6 q-6 0-10-2l55-95"
            ></path>{" "}
          </g>{" "}
          <g fill="#ea4335">
            {" "}
            <path
              id="c"
              d="M335 301l55 96q6-3 10-10l43-76q2-6 2-10"
            ></path>{" "}
          </g>{" "}
          <g transform="rotate(120 256 256)">
            {" "}
            <use href="#b" fill="#00ac47"></use>{" "}
            <use href="#c" fill="#0066da"></use>{" "}
          </g>{" "}
          <g transform="rotate(240 256 256)">
            {" "}
            <use href="#b" fill="#ffba00"></use>{" "}
            <use href="#c" fill="#00832d"></use>{" "}
          </g>{" "}
        </g>
      </svg>
    </div>
  );
};
