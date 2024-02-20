const GiveAShot = () => {
  return (
    <div id="giveashot" className="banner-brand w-[90%] lg:w-full ">
      <div className="items-center  space-y-10 p-16 text-start md:w-[66%]">
        <h1 className="text-4xl font-semibold text-brand-primary">
          Give us a shot
        </h1>
        <p className="text-xl text-brand-secondary">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <button className="btn-secondary">Learn more</button>
          <button className="btn-primary">Get started</button>
        </div>
      </div>
      <div className="w-[100%]  lg:w-[50%] xl:w-[33%]">
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
