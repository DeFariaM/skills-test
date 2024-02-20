import { NavLink } from "react-router-dom";
import Appstore from "../../icons/Appstore";
import Googleplay from "../../icons/Googleplay";
import Logotype from "../../icons/Logotype";
import { Yearfooter } from "../../icons/Yearfooter";

const Footer = () => {
  return (
    <div id="footer" className="mx-auto mb-10 w-[90%] space-y-24 md:container">
      <div className="flex flex-col space-y-5 md:flex-row-reverse md:justify-between md:space-y-0">
        <div className="space-y-4 ">
          <span className="text-sm font-semibold">Get the app</span>
          <div className="flex flex-row space-x-5 md:flex-col md:space-x-0 md:space-y-5">
            <Appstore />
            <Googleplay />
          </div>
        </div>
        <div className=" flex space-x-10">
          <div className="flex flex-col space-y-3">
            <h3 className="text-sm font-semibold">Product</h3>
            <NavLink className="nav-footer" to="/products#overview">
              Overview
            </NavLink>
            <NavLink className="nav-footer" to="/products#product-features">
              Features
            </NavLink>
            <NavLink className="nav-footer" to="/products#solutions">
              Solutions
            </NavLink>
            <NavLink className="nav-footer" to="/products#tutorials">
              Tutorials
            </NavLink>
            <NavLink className="nav-footer" to="/products#pricing">
              Pricing
            </NavLink>
            <NavLink className="nav-footer" to="/products#releases">
              Releases
            </NavLink>
          </div>
          <div className="flex flex-col space-y-3">
            <h3 className="text-sm font-semibold">Company</h3>
            <NavLink className="nav-footer" to="/company#about">
              About us
            </NavLink>
            <NavLink className="nav-footer" to="/company#careers">
              Careers
            </NavLink>
            <NavLink className="nav-footer" to="/company#press">
              Press
            </NavLink>
            <NavLink className="nav-footer" to="/company#news">
              News
            </NavLink>
            <NavLink className="nav-footer" to="/company#kit">
              Media kit
            </NavLink>
            <NavLink className="nav-footer" to="/company#contact">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start space-y-4 md:flex-row md:items-center md:justify-between">
        <Logotype />

        <Yearfooter />
      </div>
    </div>
  );
};

export default Footer;
