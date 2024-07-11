import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/case">Case</NavLink>
          </li>
          <li>
            <NavLink to="/motherboard">Motherboard</NavLink>
          </li>
          <li>
            <NavLink to="/ram">Memory</NavLink>
          </li>
          <li>
            <NavLink to="/cpu">Cpu</NavLink>
          </li>
          <li>
            <NavLink to="/gpu">Gpu</NavLink>
          </li>
          <li>
            <NavLink to="/psu">Power Supply</NavLink>
          </li>
          <li>
            <NavLink to="/aio">AIO Coolers</NavLink>
          </li>
          <li>
            <NavLink to="/fans">Fans</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
