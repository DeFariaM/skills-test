import React from "react";
import lineal from "../../assets/lineargraphic.svg";
import round from "../../assets/roundgraphic.svg";

const Hero = () => {
  return (
    <section className=" h-fit">
      <div className=" h-[500px] w-full justify-center space-y-10 bg-brand-bg py-10 text-center md:h-[620px] md:rounded-3xl">
        <div className="space-y-6 md:mt-12">
          <p className="justify-center text-4xl font-semibold leading-snug text-brand-primary md:text-7xl">
            Grow your users.
            <br />
            <span className="text-brand-secondary">Smarter.</span>
          </p>
          <p className="mx-7 max-w-fit text-brand-secondary md:mx-auto md:max-w-[60%] ">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className="mx-auto flex w-[80%] flex-col space-y-5 text-left md:w-fit md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className=" h-fit w-[100%] rounded-md p-2 font-inter ring-inset focus:border-transparent  focus:ring-0 md:w-[30vw]"
            />
            <span className="text-xs font-light text-brand-primary">
              We care about your data in our{" "}
              <a href="" className="underline">
                privacy policy.
              </a>
            </span>
          </div>
          <button className=" h-fit rounded-md bg-btn-primary px-3 py-2 font-semibold text-brand-primary transition-colors duration-300 hover:bg-[#6f4fbe]">
            Get started
          </button>
        </div>
      </div>
      <div className="relative  mx-auto -mt-14 w-[90%] rounded-3xl bg-white shadow-lg md:-mt-24 md:w-[60%]">
        <p className="p-10  text-start text-lg font-semibold">
          Users over time
        </p>
        <img src={lineal} alt="" className="w-[100%] px-10 pb-6" />
        <img
          src={round}
          alt=""
          className="absolute -bottom-10 -right-10 w-[36%] md:-bottom-16 md:-right-16 md:w-[32%]"
        />
      </div>
    </section>
  );
};

export default Hero;
