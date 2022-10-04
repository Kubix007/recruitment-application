import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import {
  NavbarHeader,
  NavbarUl,
  NavbarLi,
  NavbarLink,
  NavbarButton,
} from "./Navbar.style";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import { AppDispatch, RootState } from "../../app/store";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <NavbarHeader>
      <div className="logo">
        <NavbarLink to="/">Task App</NavbarLink>
      </div>
      <NavbarUl>
        {user ? (
          <>
            <NavbarLi>
              <NavbarButton onClick={onLogout}>
                <FaSignOutAlt />
                Wyloguj
              </NavbarButton>
            </NavbarLi>
          </>
        ) : (
          <>
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
          </>
        )}
      </NavbarUl>
    </NavbarHeader>
  );
};

export default Navbar;
