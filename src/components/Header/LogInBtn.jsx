const LogInBtn = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-[2vh] space-x-2 md:flex-row ">
      <button className="text-nowrap rounded-md px-3 py-2 text-lg font-medium text-secondary transition-colors duration-300 hover:bg-gray-200">
        Log in
      </button>
      <button className=" text-nowrap rounded-md border-borderbtn-primary bg-btn-primary px-3 py-2  text-white transition-colors duration-300 hover:bg-brand-bg">
        Sign Up
      </button>
    </div>
  );
};

export default LogInBtn;
