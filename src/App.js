import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const [carType, setCarType] = useState(0);
  const [color, setColor] = useState(0);

  const calculatePrice = (carType, color) => {
    let total = 0;
    if (carType === 0) {
      total = total + 90700;
    } else {
      total = total + 106700;
    }
    if (color === 1) {
      total = total + 1000;
    }
    return total;
  };

  return (
    <div className="App">
      <Header />
      <h2>Sélectionnez vote véhicule</h2>
      <div className="options-selector">
        <Button
          onClickFunction={() => {
            setCarType(0);
          }}
          style={carType === 0 ? "button-on" : "button-off"}
          option="Grande autonomie"
          price="90 700 €"
        />
        <Button
          onClickFunction={() => {
            setCarType(1);
          }}
          style={carType === 1 ? "button-on" : "button-off"}
          option="Performance"
          price="106 700 €"
        />
        <h2>Sélectionnez la couleur</h2>
        <Button
          onClickFunction={() => {
            setColor(0);
          }}
          style={color === 0 ? "button-on" : "button-off"}
          option="Blanc nacré multicouches"
          price="0€"
        />
        <Button
          onClickFunction={() => {
            setColor(1);
          }}
          style={color === 1 ? "button-on" : "button-off"}
          option="Noir uni"
          price="1000 €"
        />
      </div>
      <div className="price">
        <p>{calculatePrice(carType, color)} €</p>
        <button>Buy !</button>
      </div>
    </div>
  );
}

export default App;
