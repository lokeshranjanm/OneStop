import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route exact path="/products/:category">
            <Products />
          </Route>
          <Route exact path="/product-details">
            <ProductDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
