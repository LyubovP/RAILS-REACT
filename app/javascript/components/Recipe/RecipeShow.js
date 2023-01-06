import React from "react";
import styled from "styled-components"

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
      </Cardbody>
    )
}

export default RecipeShow