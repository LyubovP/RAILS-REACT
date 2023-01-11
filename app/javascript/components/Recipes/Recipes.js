import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import styled from "styled-components"
import Header from './Header'

const Home = styled.div`
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
`

const Recipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
      axios.get('/api/v1/recipes.json')
      .then(response => setRecipes(response.data.data))
      .catch(response => console.log(response))
    }, [])
    console.log(recipes)

    const grid = recipes.map( (recipe, index) => {
        const { title, image, description } = recipe.attributes
        console.log("title", title)
        console.log("image", image)
        console.log("id", recipe.id)
        console.log("description", description)
    
        return (
          <Recipe 
            key={index}
            title={title}
            image={image}
            id={recipe.id}
            description={description}
          />
        )
      })

    return ( 
        <Home>
            <Header/>
            <Grid>
                {grid}
            </Grid>
        </Home>    
    )
}

export default Recipes