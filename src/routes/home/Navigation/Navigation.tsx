import { Fragment} from "react";
import { Outlet} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

import CartIcon from "../../../components/CartIcon/CartIcon";
import CartDropdown from "../../../components/CartDropdown/CartDropdown";

import {signOutStart} from "../../../store/user/userAction"

import { selectCurrentUser } from "../../../store/user/userSelector";
import { selectIsCartOpen } from "../../../store/cart/cartSelector";

import {NavigationContainer,LogoContainer,NavLinks,NavLink,NavButton} from "./Navigation.styles"

const Navigation = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen)

  const signOutUser = ()=> dispatch(signOutStart())

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
            <NavButton onClick={signOutUser}>
              Sign out
            </NavButton>
          ) : (
            <NavLink to="/auth">
              Sign in
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
