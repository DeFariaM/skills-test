import { useState } from "react";
import Logotype from "../../icons/Logotype";
import Menu from "../../icons/Menu";
import LogInBtn from "./LogInBtn";
import NavLinks from "./NavLinks";
import { Close } from "../../icons/Close";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) setToggle(true);
    if (window.innerWidth < 768) setToggle(false);
  });
  return (
    <header className="mx-4 mt-4 flex justify-between md:container md:mx-auto">
      <div className="flex min-h-fit justify-between space-x-10">
        <div>
          <Logotype />
        </div>
        <div className="absolute right-0 top-[10%] min-h-[25vh] w-full md:relative md:min-h-fit ">
          {toggle && <NavLinks />}
        </div>
      </div>

      <div className="absolute left-0 top-[35%] w-full md:relative md:flex md:min-h-fit md:justify-end">
        {toggle && <LogInBtn />}
      </div>
      <button className="fixed right-3 top-4 md:hidden" onClick={toggleMenu}>
        {toggle ? (
          <Close className="w-8 text-secondary " />
        ) : (
          <Menu className="w-8 text-secondary" />
        )}
      </button>
    </header>
  );
};

export default Header;
