import React from "react";
import Grooming from "./Grooming";
import Shirt from "./Shirt";
import Trouser from "./Trouser";
import Jewellery from "./Jewellery";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

export default function Women() {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <div>
        <nav>
        <ul>
          <li>
            <Link to={`${url}/grooming`}>Grooming</Link>
          </li>

          <li>
            <Link to={`${url}/shirt`}>Shirt</Link>
          </li>

          <li>
            <Link to={`${url}/trouser`}>Trouser</Link>
          </li>

          <li>
            <Link to={`${url}/jewellery`}>Jewellery</Link>
          </li>
        </ul>
      </nav>
      </div>

      <p>Women Items:</p>

      <div>
        <Switch>
        <Route exact path={`${path}/grooming`} component={Grooming} />
        <Route path={`${path}/Shirt`} component={Shirt} />
        <Route path={`${path}/trouser`} component={Trouser} />
        <Route path={`${path}/jewellery`} component={Jewellery} />
      </Switch>
      </div>
    </div>
  );
}
