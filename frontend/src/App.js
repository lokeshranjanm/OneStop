import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/Register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
