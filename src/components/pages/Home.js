import { Fragment } from "react";
import classes from "./home.module.css";
import tugboat from "../../assets/tugboat.png";

const Home = () => {
  return (
    <Fragment>
      <div>
        <h2>Home</h2>
        <p>Welcome to the Tugboat Logic weather App!</p>
      </div>
      <div className={classes["display-box"]}>
        <div className={classes.text}>
          <p>Hi Everyone</p>
          <p>
            That was a really cool challenge but as I'm not instructed to do
            anything with home page, I've decided to put Tugboat Logic logo
            here, add localization and have fun. Why not!
          </p>
          <p>Cheers!</p>
        </div>
        <div>
          <img src={tugboat} alt="logo" />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
