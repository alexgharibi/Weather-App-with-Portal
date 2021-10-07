import React from "react";
import classes from "./nav.module.css";
import Home from "../pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Weather from "../pages/Weather";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <Router>
      <div className={classes.container}>
        <div className={classes["sidebar_container"]}>
          <ul className={classes.sidebar}>
            <li>
              <Link to="/">{t("Home")}</Link>
            </li>
            <hr className={classes.line} />
            <li>
              <Link to="/weather">{t("Weather")}</Link>
            </li>
          </ul>
        </div>
        <div className={classes["page_container"]}>
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
