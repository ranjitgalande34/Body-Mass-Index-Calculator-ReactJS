import React from 'react';
import './App.css'; // You can style the App container if needed
import BMICalculator from './Components/BMICalculator.js';
import Sidebar from './Components/Sidebar.js';
import backgroundImage from './assets/vegetables.jpeg';

const App = () => {
  return (
    <>
 <div className='Header'>Body Mass Index</div>
    <div className="app-container">
     
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="content-container">
        <BMICalculator />
      </div>
      <img src={backgroundImage} alt="Vegetables" className="background-image" />
    </div>
    </>
  );
};

export default App;
