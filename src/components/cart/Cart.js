import Modal from "./../UI/Modal";
import classes from "./Cart.module.css";
import { useState } from "react";
import "weather-icons/css/weather-icons.css";

const Cart = (props) => {
  const [tempreture, setTempreture] = useState(null);

  const { city, weather, description, icon } = props;

  const celsiusHandler = () => {
    let cel = Math.round(weather - 273.15);
    cel = cel.toFixed(2);
    setTempreture(cel);
  };

  const fahrenheitHandler = () => {
    let far = Math.round((weather * 9) / 5 - 459.67);
    setTempreture(far);
  };

  const kelvinHandler = () => {
    setTempreture(weather);
  };

  return (
    <Modal onHideCart={props.onHideCart}>
      <div>
        <button onClick={celsiusHandler}>celsius</button>
        <button onClick={fahrenheitHandler}>faren</button>
        <button onClick={kelvinHandler}>kev</button>
        {!tempreture && <p>The current weather is: {weather && weather}</p>}
        {tempreture && <p>The current weather is: {tempreture}</p>}
      </div>
      <div className={classes.container}>
        <h1>{city}</h1>
        <h5>
          <i className={`wi ${icon}`}></i>
        </h5>
        <h1>{weather}&deg;</h1>
        <h4>{description}</h4>
      </div>
    </Modal>
  );
};

export default Cart;
