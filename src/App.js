import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import AddProduct from "./AddProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  //the useEffect && contextAPI will be used to keep track of which user is logged in currently
  //so that we know on each page which user is logged in and will show personalized data like cart items
  //and the session is maintained even if the page is refreshed
  useEffect(() => {
    //will only run once when the app comp is loaded
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is authUser", authUser);
      
      if (authUser) {
        //the user just logged is or was already logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        });
      } else {
        //the user logged out
        dispatch({
          type:'SET_USER',
          user: null
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/addProduct">
          <Header />
            <AddProduct />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
