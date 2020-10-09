import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  AppHeader,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  LogoApp,
} from "./header.styles";
import CartIcon from "../cart-icon/cart-icon";

import { signOut } from "../../redux/user/user.actions.js";
import CartDropDown from "../cart-dropdown/cart-dropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, signOut, hidden }) => {
  return (
    <AppHeader>
      <LogoContainer to="/">
        <LogoApp />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink>CONTACT</OptionLink>
        <OptionLink></OptionLink>
        {currentUser ? (
          <React.Fragment>
            {currentUser.name}
            <OptionLink as="div" onClick={signOut}>
              SIGN OUT
            </OptionLink>
          </React.Fragment>
        ) : (
          <OptionLink to="/login">SIGN IN</OptionLink>
        )}

        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </AppHeader>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
