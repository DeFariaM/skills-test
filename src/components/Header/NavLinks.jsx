import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div id="navlinks" className=" justify-center bg-white pb-5 lg:space-x-6">
      <ul className="flex flex-col items-center gap-[2vh] lg:flex-row">
        <li>
          <NavLink className="nav-btn" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/products">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/resources">
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-btn" to="/pricing">
            Pricing
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
