import React from "react";
import "./nav.css";
import Home from "../pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Weather from "../pages/Weather";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/weather",
    exact: true,
    main: () => <Weather />,
  },
];

const Nav = () => {
  return (
    <Router>
      <div className="container">
        <div className="sidebar_container">
          <ul className="sidebar">
            <li className="a1">
              <Link to="/">Home</Link>
            </li>
            <hr className="line" />
            <li>
              <Link to="/weather">Weather</Link>
            </li>
          </ul>
        </div>
        <div className="page_container">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Nav;
