import { Fragment} from "react";
import { Outlet} from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

import CartIcon from "../../../components/CartIcon/CartIcon";
import CartDropdown from "../../../components/CartDropdown/CartDropdown";


import { signOutUser } from "../../../utils/firebase/firebase";
import { selectCurrentUser } from "../../../store/user/userSelector";
import { selectIsCartOpen } from "../../../store/cart/cartSelector";

import {NavigationContainer,LogoContainer,NavLinks,NavLink} from "./Navigation.styles"

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen)

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
