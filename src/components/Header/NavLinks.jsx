import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className=" justify-center text-lg font-medium text-secondary  lg:space-x-6">
      <ul className="flex flex-col items-center gap-[2vh] md:flex-row">
        <li>
          <NavLink
            className="rounded-md px-3 py-2  transition-colors duration-300 hover:bg-gray-200"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="rounded-md px-3 py-2 transition-colors  duration-300
        hover:bg-gray-200"
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className="rounded-md px-3 py-2 transition-colors  duration-300
        hover:bg-gray-200"
            to="/resources"
          >
            Resources
          </NavLink>
        </li>
        <li>
          <NavLink
            className="rounded-md px-3 py-2 transition-colors duration-300 hover:bg-gray-200"
            to="/pricing"
          >
            Pricing
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
