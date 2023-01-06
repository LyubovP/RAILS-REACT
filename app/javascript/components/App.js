import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Recipe from './Recipe/Recipe'
import Recipes from './Recipes/Recipes'
import RecipeCreate from './Recipe/RecipeCreate'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Recipes/>} />
        <Route exact path="/recipes/:id" element={<Recipe/>} />
        <Route exact path="/recipes" element={<RecipeCreate/>} />
      </Routes>
    </Router>
  )
}
export default App
