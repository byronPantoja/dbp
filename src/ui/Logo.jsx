import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/">
      <h1 className="text-pink-main hover:font-bold">byronpantoja.com</h1>
    </NavLink>
  );
}

export default Logo;
