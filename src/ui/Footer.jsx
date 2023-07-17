import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-7xl justify-center px-6 py-8 md:flex md:items-center lg:px-8">
        <div className="space-x-6">
          <NavLink to="/signin" className="text-center text-xs text-gray-500">
            &copy; 2023 byronpantoja.com. All rights reserved.
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
