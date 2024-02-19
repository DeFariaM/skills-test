const IntegrationCard = ({ title, redirect, description }) => {
  const img = title.split(" ");
  const image = img[0].toLowerCase();

  return (
    <div className=" mx-auto mt-10 w-[90%] justify-center text-center md:w-[25vw]">
      <img src={`src/assets/${image}.svg`} alt="" className="mx-auto w-10" />

      <h1 className="mb-2 mt-5 text-xl font-semibold">{title}</h1>
      <p className="mb-5 text-secondary">{description}</p>
      <div className="text-tertiary flex items-center justify-center space-x-2 font-semibold">
        <a href={redirect} target="_blank">
          View integration{" "}
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default IntegrationCard;
