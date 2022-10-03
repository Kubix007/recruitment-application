import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavbarHeader, NavbarUl, NavbarLi, NavbarLink } from "./Navbar.style";

const Navbar = () => {
  return (
    <NavbarHeader>
      <div className="logo">
        <NavbarLink to="/">Application</NavbarLink>
      </div>
      <NavbarUl>
        <NavbarLi>
          <NavbarLink to="/login">
            <FaSignInAlt />
            Zaloguj się
          </NavbarLink>
        </NavbarLi>
        <NavbarLi>
          <NavbarLink to="/register">
            <FaUserAlt />
            Zarejestruj się
          </NavbarLink>
        </NavbarLi>
      </NavbarUl>
    </NavbarHeader>
  );
};

export default Navbar;
