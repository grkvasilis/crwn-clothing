import { Fragment, useContext } from "react";
import { Outlet} from "react-router-dom";

import CartIcon from "../../../components/CartIcon/CartIcon";
import CartDropdown from "../../../components/CartDropdown/CartDropdown";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../contexts/UserContext";
import { CartContext } from "../../../contexts/CartContext";

import { signOutUser } from "../../../utils/firebase/firebase";

import {NavigationContainer,LogoContainer,NavLinks,NavLink} from "./Navigation.styles"

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SignIn
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
