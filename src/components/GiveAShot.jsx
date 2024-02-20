const GiveAShot = () => {
  return (
    <div className="text container mx-auto flex flex-col items-center justify-between overflow-hidden rounded-3xl bg-brand-bg lg:flex-row">
      <div className="items-center  space-y-10 p-16 text-start md:w-[66%]">
        <h1 className="text-4xl font-semibold text-brand-primary">
          Give us a shot
        </h1>
        <p className="text-xl text-brand-secondary">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <button className="rounded-md bg-btn-secondary px-3 py-2 font-semibold text-tertiary transition-colors duration-300 hover:bg-[#e2d9f8]">
            Learn more
          </button>
          <button className="rounded-md bg-btn-primary px-3 py-2 font-semibold text-brand-primary transition-colors duration-300 hover:bg-[#6f4fbe]">
            Get started
          </button>
        </div>
      </div>
      <div className="w-[100%] bg-red-400 lg:w-[50%] xl:w-[33%]">
        <img
          src="src/assets/image-1.png"
          alt="woman-smile"
          className="w-[100%]"
        />
      </div>
    </div>
  );
};

export default GiveAShot;
