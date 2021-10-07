import Nav from "../nav/Nav";
import classes from "./App.module.css";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <div className={classes.App}>
        <Nav />
      </div>
    </Fragment>
  );
};

export default App;
