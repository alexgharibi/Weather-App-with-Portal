import Modal from "./../UI/Modal";
import useHttp from "./../hook/use-Http";
import { useState } from "react";

const Cart = (props) => {
  const [tempreture, setTempreture] = useState(null);

  const celsiusHandler = () => {
    let cel = props.weather - 273.15;
    cel = cel.toFixed(2);
    setTempreture(cel);
  };

  const fahrenheitHandler = () => {
    let far = (props.weather * 9) / 5 - 459.67;
    far = far.toFixed(2);
    setTempreture(far);
  };

  const kelvinHandler = () => {
    setTempreture(props.weather);
  };

  return (
    <Modal onHideCart={props.onHideCart}>
      <div>
        <button onClick={celsiusHandler}>celsius</button>
        <button onClick={fahrenheitHandler}>faren</button>
        <button onClick={kelvinHandler}>kev</button>
        {!tempreture && (
          <p>The current weather is: {props.weather && props.weather}</p>
        )}
        {tempreture && <p>The current weather is: {tempreture}</p>}
      </div>
      <div>Hellooooo</div>
    </Modal>
  );
};

export default Cart;
