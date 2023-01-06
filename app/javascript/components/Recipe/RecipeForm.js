import  React from "react";
import styled from "styled-components"

const RecipeForm = (recipe) => { 
    return (        
    <div>
        <form onSubmit={handleSubmit}>
          <label>
            Recipe Title:
            <input type="text" name="title" valeu={recipe.title} onChange={handleChange} />
          </label>
          <label>
            Recipe description:
            <input type="text" name="description" valeu={recipe.description} onChange={handleChange} />
          </label>
          <label>
            Recipe instruction:
            <input type="text" name="instruction" valeu={recipe.instruction} onChange={handleChange} />
          </label>
          <button type="submit">Create Recipe</button>
        </form>
    </div>
    )
}

export default RecipeForm