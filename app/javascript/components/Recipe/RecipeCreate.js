import  React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import { BrowserRouter as Router, Link } from "react-router-dom";

const RecipeCreate = () => {   
    const [recipe, setRecipe] = useState({})   
    const CATEGORY_OPTIONS = ['Drink', 'Appetizer', "Breakfast", "Lunch", "Dinner", "Dessert"];
    const categoryOptions = CATEGORY_OPTIONS.map( (category, index) => {
        return <option key={index} value={category}>{category}</option>
      })

    const handleChange = (e) => {
        e.preventDefault();
        console.log( 'name:', e.target.name, 'value:', e.target.value)
        setRecipe(Object.assign({}, recipe,{[e.target.name]: e.target.value}))
        console.log( 'recipe:', recipe)

      };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        
        axios.post('/api/v1/recipes', { recipe })
        .then((resp) => {
            //debugger
            setRecipe({title: '', description: '', instruction: '', category: ''})
        })
        .catch((resp) => {})
    }    
    console.log(recipe)
    return (
        <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Add a new recipe to our awesome recipe collection.
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="recipeName">Recipe title</label>
                <input type="text" name="title" valeu={recipe.title} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="recipeDescription">Description</label>
                <input type="text" name="description" valeu={recipe.description} onChange={handleChange} /> 
              </div>
              <label htmlFor="instruction">Preparation Instructions</label>
              <textarea
                className="form-control"
                name="instruction"
                rows="5"
                valeu={recipe.instruction}
                onChange={handleChange}
              />
              <div className="form-group">
                <label htmlFor="recipeCategory">Category</label>
                <select name="category" valeu={recipe.category} onChange={handleChange}>{categoryOptions}</select>
              </div>
              <button type="submit" className="btn custom-button mt-3">
                Create Recipe
              </button>
              <Link to="/" className="btn btn-link mt-3">
                Back to recipes
              </Link>
            </form>
          </div>
        </div>
      </div>

    )
}

export default RecipeCreate