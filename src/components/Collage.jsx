import React from "react";

const Collage = () => {
  return (
    <div
      className="mx-auto flex flex-col items-center justify-between bg-[#F9FAFB]
    py-20 md:flex-row"
    >
      <div className="items-center space-y-10 p-10 md:w-[60%]">
        <h1 className="text-nowrap text-5xl font-semibold">
          No long-term contracts.
          <br />
          No catches.
        </h1>
        <p className="text-xl text-secondary">
          Start your 30-day free trial today.
        </p>

        <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <button className="text-tertiary rounded-md bg-btn-secondary px-3 py-2 font-semibold transition-colors duration-300 hover:bg-[#e2d9f8]">
            Learn more
          </button>
          <button className="rounded-md bg-btn-primary px-3 py-2 font-semibold text-brand-primary transition-colors duration-300 hover:bg-[#6f4fbe]">
            Get started
          </button>
        </div>
      </div>

      <div className="grid grid-rows-2 md:w-[40%]  md:gap-4 ">
        <div className="mx-auto grid w-full grid-rows-2 gap-4 md:w-fit md:grid-cols-2 md:grid-rows-none md:items-end md:gap-4">
          <img src="src/assets/collage-1.png" alt="" />
          <img src="src/assets/collage-2.png" alt="" />
        </div>
        <div className="mx-auto grid w-fit grid-cols-3 gap-4">
          <img src="src/assets/collage-3.png" alt="" />
          <img src="src/assets/collage-4.png" alt="" className=" mx-auto" />
          <img src="src/assets/collage-5.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Collage;
