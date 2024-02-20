const LogInBtn = () => {
  return (
    <div
      id="btn-users"
      className="flex flex-col items-center justify-center gap-2 space-x-2 border-t-2 bg-white pb-2 shadow-2xl lg:flex-row lg:border-t-0 lg:shadow-none"
    >
      <button className="nav-btn">Log in</button>
      <button className=" btn-primary">Sign Up</button>
    </div>
  );
};

export default LogInBtn;
