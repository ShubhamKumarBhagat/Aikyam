
import React from 'react';
import './App.css';
import Footer from './components/Layout/Footer/Footer';
import Section1 from './components/Layout/Section1/Section1';
import Section2 from './components/Layout/Section2/Section2';

function App() {
  
  return (
    <div className="app">
      <Section1></Section1>
      <Section2></Section2>
      <Footer></Footer>
    </div>
  );
}

export default App;
