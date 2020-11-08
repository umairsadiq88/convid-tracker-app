import React from 'react';
import './App.css';
import Cards from "./components/card/Card"
import ButtonAppBar from "./components/Nav/Nav"


function App() {
  return (
    <div className="App">
      <ButtonAppBar />

      <h1>Covid-19</h1>

      <Cards />


    </div>
  );
}

export default App;
