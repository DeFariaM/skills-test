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
      <div className="w-[100%]  lg:w-[75%] xl:w-[40%]">
        <img
          src="https://s3-alpha-sig.figma.com/img/cebe/a7e0/4b9d293dbdedf2f0b205f66900fd7697?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZOsaJhSh2L2~ZyI4RAeOJ0OzXmA8x395tdUmrZk6xF1dk2H5VHjdmSbtDzAPwiht8hLyGNcaj0i4Yr8~lFv8b1klpVCNKWnT0ScER9hrBCR6f052ouCQxWm7bPIb6LbV2CJMquell99p5ZidW7j6arIIKd-GFGpsVpUxEsevS8l4LMLj6i2NQ0A7apeIVgtEWgZ72iLTvbwpKRkH5QAlVcZoJ~3pWWezPY~HyqqACBcr3z4dBAITWrgni9KdjIBul9v0x9VS8xDOHyFAvpNvgs2BslWa5gUgwv~UHzWXKiQ3OeFXEABO~aKZwZ4PBSGoQaTCqn6F-qOwL3lbF1lbaw__"
          alt="woman-smile"
          className="w-[100%]"
        />
      </div>
    </div>
  );
};

export default GiveAShot;
