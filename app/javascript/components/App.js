import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./Navigation";

const App = () => {
  return(
    <Router>
      <Navigation/>
    </Router>
  )
}
export default App
