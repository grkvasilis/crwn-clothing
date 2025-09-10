import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../../components/CartIcon/CartIcon";
import CartDropdown from "../../../components/CartDropdown/CartDropdown";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/UserContext";
import { CartContext } from "../../../contexts/CartContext";

import { signOutUser } from "../../../utils/firebase/firebase";

import "./Navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SignIn
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
