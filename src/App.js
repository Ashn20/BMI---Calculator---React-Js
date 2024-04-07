import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [height, setHeight] = useState("");
  let [weight, setWeight] = useState("");
  let [bmi, setBmi] = useState(null);
  let [bmistatus, setBmiStatus] = useState("");
  let [errormessage, setErrorMessage] = useState("");

  function calculateBmi() {
    let isValidHeight = /^\d+$/.test(height);
    let isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      let heightinMeters = height / 100;
      let bmiValue = weight / (heightinMeters * heightinMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("Under - Weight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Over - Weight");
      } else {
        setBmiStatus("Obese");
      }
      setErrorMessage("");

    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter valid Numeric values for Height and Weight.");
    }
  }

  return (
    <>
      <div className='bmi-calculator'>
        <div className='box'></div>
        <div className='data'>
          <h1>BMI - Calculator</h1>
          {errormessage && <p className='error'>{errormessage}</p>}
          <div className='input-container'>
            <label htmlFor='height'>Height (cm) : </label>
            <input type='text' value={height} id='height' onChange={((e) => setHeight(e.target.value))}></input>
          </div>
          <div className='input-container'>
            <label htmlFor='weight'>Weight (kg) : </label>
            <input type='text' value={weight} id='weight' onChange={((e) => setWeight(e.target.value))}></input>
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          {bmi !== null && (
            <div className='result'>
              <p>Your BMI is : {bmi}</p>
              <p>Status : {bmistatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
