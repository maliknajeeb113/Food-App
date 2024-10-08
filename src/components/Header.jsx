import { useState } from "react";
import burger from "../../src/assets/burger.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="container flex justify-between mx-auto p-5 border-b-2 items-center">
      <Link to="/">
        <div className="text-xl font-bold">
          <span className="tracking-wide">Food</span>
          <span className="bg-amber-600 p-[2px] text-black rounded-sm">
            Hub
          </span>
        </div>
      </Link>
      <div className="nav-items">
        <ul className="flex gap-10 items-center justify-center">
          <li className="cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="rounded bg-amber-600 p-2 text-black"
              onClick={() =>
                btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
