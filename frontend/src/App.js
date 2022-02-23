import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";

import Login from "./Pages/Login";
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
