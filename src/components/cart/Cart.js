import Modal from "./../UI/Modal";
import classes from "./Cart.module.css";
import { useState } from "react";
import "weather-icons/css/weather-icons.css";
import { celcius, fahrenheit } from "./Conversion";

const Cart = (props) => {
  const [tempreture, setTempreture] = useState(null);

  const { city, weather, description, icon } = props;

  const onChangeTempHandler = (event) => {
    const selected = event.target.value;
    if (selected === "Celsius") {
      setTempreture(celcius(weather));
    }
    if (selected === "Fahrenheit") {
      setTempreture(fahrenheit(weather));
    }
    if (selected === "Kelvin") {
      setTempreture(weather + "\u00B0K");
    }
  };

  return (
    <Modal onHideCart={props.onHideCart}>
      <div className={classes.container}>
        <h1>{city}</h1>
        <h5>
          <i className={`wi ${icon}`}></i>
        </h5>
        {!tempreture && <h1>{weather + "\u00B0K"}</h1>}
        {tempreture && <h1>{tempreture}</h1>}
        <h3>{description}</h3>
      </div>
      <div>
        <select onChange={onChangeTempHandler} className={classes.box}>
          <option value="Kelvin">Kelvin</option>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
      </div>
    </Modal>
  );
};

export default Cart;
