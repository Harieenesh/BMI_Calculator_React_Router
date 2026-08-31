import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (weight === "" || height === "" || height <= 0) {
      alert("Please enter valid weight and height");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);

    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue < 25) {
      setCategory("Normal Weight");
    } else if (bmiValue < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obesity");
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>BMI Calculator</h1>

        <div className="input-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            placeholder="Enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Height (cm)</label>
          <input
            type="number"
            placeholder="Enter height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <button onClick={calculateBMI}>Calculate BMI</button>

        <button className="reset" onClick={resetCalculator}>
          Reset
        </button>

        {bmi && (
          <div className="result">
            <h2>Your BMI</h2>
            <p className="bmi-value">{bmi}</p>
            <p>Category: <strong>{category}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;