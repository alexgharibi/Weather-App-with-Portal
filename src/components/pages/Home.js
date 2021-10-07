import { Fragment } from "react";
import classes from "./home.module.css";
import tugboat from "../../assets/tugboat.png";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Home = () => {
  const { t } = useTranslation();

  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Fragment>
      <div>
        <h2>{t("Home")}</h2>
        <p>{t("Welcome")}</p>
        <select
          name="language"
          onChange={onChange}
          className={classes.selector}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
        </select>
      </div>
      <div className={classes["display-box"]}>
        <div className={classes.text}>
          <p>{t("Hi Everyone")}</p>
          <p>{t("That")}</p>
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
