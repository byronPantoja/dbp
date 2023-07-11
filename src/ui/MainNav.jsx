import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/projects">
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/notes">
            <span>Notes</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
