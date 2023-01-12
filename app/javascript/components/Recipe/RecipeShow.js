import React from "react";
import styled from "styled-components"
import { BrowserRouter as Router, Link, useParams} from "react-router-dom";
import axios from "axios";

const Cardbody = styled.div`
`
const Cardheader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`
const Cardtitle  = styled.div`
  flex: 0.5;
  font-size: xx-large;
  margin-bottom: 0;
  margin-top: 0;
`
const Cardimage = styled.div`
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`
const Carddate = styled.div`
  flex: 0.3;
  font-size: small;
  margin-top: 0;
`
const Cardtext = styled.div`
  font-size: larger;
`
const Cardinst = styled.div`
  margin-top: 10px;
  font-size: medium;
`

const RecipeShow = ({recipe, setRecipe}) => {
  const params = useParams();

  const handleDestroy = (id) => {
    const url = `/api/v1/recipes/${params.id}`

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    axios.delete(url)
    .then( (data) => {
      const recipe = recipe.filter(recipe => recipe.id !== id);
      setRecipe(recipe);      
    })
    .catch( data => console.log('Error', data) )
  }
  console.log(recipe)
    return (
        <Cardbody>
        <Cardheader>
          <div className="card-title-group">
            <Cardtitle>{recipe.data.attributes.title}</Cardtitle>
            <Carddate>{}</Carddate>
          </div>
        </Cardheader>
        <Cardimage />
          <img src={recipe.data.attributes.image} alt={recipe.data.attributes.title} />
        <Cardtext>{recipe.data.attributes.description}</Cardtext>
        <Cardinst>{recipe.data.attributes.instruction}</Cardinst>
        <div className="card-bootom">     
        </div>
        <Link to="#" onClick={handleDestroy} >
          <span className='bi bi-trash-fill' color="red" size={20}/>
        </Link>
      </Cardbody>
    )
}

export default RecipeShow