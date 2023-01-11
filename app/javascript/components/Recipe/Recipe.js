import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import RecipeShow from './RecipeShow'

const Recipe = (props) => {
    const [recipe, setRecipe] = useState({})
    const params = useParams();
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const url = `/api/v1/recipes/${params.id}`

        axios.get(url)
        .then(response => {
            setRecipe(response.data)
            setLoaded(true)
         })
        .catch(response => console.log(response) )
    }, [])
    return (
        <div className="container">
            {
                loaded && 
                <RecipeShow 
                 recipe={recipe}
                 setRecipe={setRecipe}
                />
            }
        </div>
    )
}

export default Recipe