import React from "react";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

import Content from "./components/content/content.jsx";
import Header from "./components/header/header.jsx";
import SignIn from "./components/signin/signin.jsx";
import SignUp from "./components/signUp/signUp.jsx";
import Shop from "./components/shop/shop.jsx";
import ProductPage from "./components/productPage/productPage.jsx";
import CheckoutPage from "./components/checkout/checkout";

import { updateCollections } from "./redux/shop/shop.actions";

import { AppContainer } from "./App.styles";
import { GlobalStyle } from "./global.styles";

class App extends React.Component {
  componentDidMount() {
    const { updateCollections } = this.props;
    fetch("http://localhost:5000/shop", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    }).then((response) =>
      response.json().then((response) => updateCollections(response))
    );
  }

  render() {
    console.log(this.props);
    return (
      <AppContainer>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Content />} />
          <Route exact path="/shop" render={() => <Shop />} />
          <Route
            exact
            path="/login"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignIn />
            }
          />
          <Route
            exact
            path="/register"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUp />
            }
          />
          <Route exact path="/product/:productId" component={ProductPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </AppContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
