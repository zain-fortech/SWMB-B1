import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <navbar className="nav">
      <span>
        <NavLink to={"/"}>Home</NavLink>
      </span>
      <span>
        <NavLink to={"/about"}>About</NavLink>
      </span>
      <span>
        <NavLink to={"/services"}>Services</NavLink>
      </span>
    </navbar>
  );
}

export default Nav;
