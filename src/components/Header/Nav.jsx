import { useEffect, useState } from "react";
import Logotype from "../../icons/Logotype";
import Menu from "../../icons/Menu";
import LogInBtn from "./LogInBtn";
import NavLinks from "./NavLinks";
import { Close } from "../../icons/Close";

const Nav = () => {
  const [toggle, setToggle] = useState(null);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (window.innerWidth < 1028) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1028) setToggle(true);
    if (window.innerWidth < 1028) setToggle(false);
  });
  return (
    <nav
      id="navbar"
      className="mx-4 mt-4 flex items-center justify-between lg:container lg:mx-auto"
    >
      <div className="flex min-h-fit justify-between space-x-10">
        <div>
          <Logotype />
        </div>
        <div className="absolute right-0 top-[100%] min-h-[25vh] w-full lg:relative lg:min-h-fit lg:items-center ">
          {toggle && <NavLinks />}
        </div>
      </div>

      <div className="absolute left-0 top-60 w-full lg:relative lg:top-0 lg:flex lg:min-h-fit lg:justify-end">
        {toggle && <LogInBtn />}
      </div>
      <button className="fixed right-3 top-4 lg:hidden" onClick={toggleMenu}>
        {toggle ? (
          <Close className="w-8 text-secondary " />
        ) : (
          <Menu className="w-8 text-secondary" />
        )}
      </button>
    </nav>
  );
};

export default Nav;
