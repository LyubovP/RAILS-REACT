import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const Recipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
      axios.get('/api/v1/recipes.json')
      .then(response => {
        setRecipes(response.data.data)
      })
      .catch(response => console.log(response))
    }, [recipes.length])

    const list = recipes.map(recipes => {
        return(<li key={recipes.attributes.title}>{recipes.attributes.title}</li>)
    })

    return ( 
    <Fragment>
      <div> This is index</div>
      <div>{list}</div>
    </Fragment>    
    )
}

export default Recipes