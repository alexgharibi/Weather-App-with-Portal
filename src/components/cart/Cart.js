import Modal from "./../UI/Modal";
import classes from "./Cart.module.css";
import { useState } from "react";
import "weather-icons/css/weather-icons.css";

const Cart = (props) => {
  const [tempreture, setTempreture] = useState(null);

  const { city, weather, description, icon } = props;

  const onChangeTempHandler = (event) => {
    const selected = event.target.value;
    if (selected === "Celsius") {
      let cel = Math.round(weather - 273.15) + "\u00B0C";
      setTempreture(cel);
    }

    if (selected === "Fahrenheit") {
      let far = Math.round((weather * 9) / 5 - 459.67) + "\u00B0F";
      setTempreture(far);
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
