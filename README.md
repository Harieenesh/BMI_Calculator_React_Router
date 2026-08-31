Ex06 BMI Calculator
Date:31-08-2026
AIM

To develop a responsive and interactive Body Mass Index (BMI) Calculator using React that allows users to input their height and weight, and calculates their BMI to categorize their health status (e.g., Underweight, Normal, Overweight, Obese).

DESIGN STEPS
STEP 1: Initialize React Project

Create a new React app using create-react-app.
Install React Router using:
npm install react-router-dom

STEP 2: Set Up Routing
Create routing structure with react-router-dom:

Home route (/) – Intro or Navigation
BMI Calculator route (/bmi)
Result route (/result)

STEP 3: Design the BMI Form Page
Create a form to accept Height (in cm or m) and Weight (in kg).
On form submit, navigate to the result page with entered values via URL query params or context/state.

STEP 4: Handle Input Validation
Check if height and weight are valid numbers.
Optionally, show error messages for invalid inputs.

STEP 5: Perform BMI Calculation
In the result component:
Extract height and weight from the route (URL or passed state).
Apply the BMI formula:
image​

Convert height from cm to m if needed.

STEP 6: Display Result
Show calculated BMI.
Show category based on BMI range:
Underweight, Normal, Overweight, Obese, etc.

STEP 7: Navigation Options
Provide a button to go back to the BMI form to calculate again.

STEP 8: Enhancements
Add styling using CSS or Tailwind.

PROGRAM
app.jsx
```import { useState } from "react";
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
```
app.css
```

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2f4f7;
}

.calculator {
  width: 400px;
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

h1 {
  text-align: center;
  margin-bottom: 25px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
}

button:hover {
  background: #0056b3;
}

button.reset {
  background: #6c757d;
}

button.reset:hover {
  background: #545b62;
}

.result {
  margin-top: 20px;
  padding: 20px;
  text-align: center;
  background: #f8f9fa;
  border-radius: 10px;
}

.result h2 {
  margin-bottom: 10px;
}

.bmi-value {
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 10px;
}
```

OUTPUT
![alt text](<Screenshot 2026-08-31 191148.png>)

RESULT

The BMI Calculator successfully takes user input for height and weight, performs the BMI calculation in real-time using React state and event handling, and displays the BMI value along with the corresponding health category.