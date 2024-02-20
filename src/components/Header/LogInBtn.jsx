const LogInBtn = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[2vh] space-x-2 border-t-2 bg-white pb-5 md:flex-row md:border-t-0">
      <button className="nav-btn">Log in</button>
      <button className=" btn-primary">Sign Up</button>
    </div>
  );
};

export default LogInBtn;
