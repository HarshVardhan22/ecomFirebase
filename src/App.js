import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/HomePage/Home/Home";
import Checkout from "./Components/CheckoutPage/Checkout/Checkout";
import Login from "./Components/LoginPage/Login/Login";
import AddProduct from "./Components/AddProductPage/AddProduct/AddProduct"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./Redux/StateProvider";
import SignUp from "./Components/LoginPage/SignUp/SignUp"
function App() {
  const [{}, dispatch] = useStateValue();
  //the useEffect && contextAPI will be used to keep track of which user is logged in currently
  //so that we know on each page which user is logged in and will show personalized data like cart items
  //and the session is maintained even if the page is refreshed

  useEffect(() => {
    //will only run once when the app comp is loaded
    const [url,setUrl] = useState('/login');

    auth.onAuthStateChanged((authUser) => {
      console.log("the user is authUser", authUser);
      
      if (authUser) {
        setUrl('/checkout');
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
          <Route path="/signUp">
            <SignUp/>
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
