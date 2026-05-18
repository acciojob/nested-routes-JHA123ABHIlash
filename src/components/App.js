import React from "react";
import "./../styles/App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Women from "./Women";

const App = () => {
  return (
    <main>
     <div>
       <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
        </ul>
      </nav>
     </div>

      <div>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/women" component={Women}></Route>
      </Switch>
      </div>
    </main>
  );
};

export default App;
