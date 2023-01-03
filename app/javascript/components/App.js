import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeForm from "./RecipeForm";
import Home from './Home';
import Recipe from './Recipe/Recipe'
import Recipes from './Recipes/Recipes'

const App = () => {
  return(
    <Router>
      <Routes>
      <Route exact path="/" element={<Recipes/>} />
      <Route exact path="/recipes/:id" element={<Recipe/>} />
        
      </Routes>
    </Router>
  )
}
export default App
