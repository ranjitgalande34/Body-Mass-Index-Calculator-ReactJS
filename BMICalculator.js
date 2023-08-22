import React, { useState } from 'react';
import './BMICalculator.css'; // Create this CSS file for styling

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100; 
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    
    console.log('BMI:', bmi);
    let resultText = '';

    if (bmi < 18.5) {
      resultText = 'Underweight';
    } else if (bmi>18.5 && bmi < 24.9) {
      resultText = 'Normal Weight';
    } else if ( bmi>24.9 && bmi < 29.9) {
      resultText = 'Overweight';
    } else {
      resultText = 'Obese';
    }

    setResult(resultText);
  };

  return (
    <div className="bmi-calculator">
      <input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter height (m)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate</button>
      {result && <div className={`result ${result.toLowerCase()}`}>{result}</div>}
    </div>
  );
};

export default BMICalculator;
