import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components"

const Card = styled.div`
background-color: white;
text-align: center;
color: #272727;
padding: 20px;
border-radius: 10px;
border: 1px;
border-color: #FFA69E;
border-style: solid;
transition: 200ms;
max-width: 380px;
&:hover {
  transition: 200ms;
	border: 3px;
	border-color: #FF686B;
	border-style: solid;
}
`
const Cardheader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`
const Cardtitle  = styled.h1`
  flex: 0.5;
  font-size: large;
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
  width: 350px;
  font-size: medium;
`

const Recipe = ({title, image, id, description}) => {
  console.log(id)
  return (
    <Card>
      <Cardheader>
        <div className="card-title-group">
          <Cardtitle>{title}</Cardtitle>
          <Carddate>{}</Carddate>
        </div>
      </Cardheader>
      <Cardimage />
        <img src={image} alt={title} />
      <Cardtext>{description}</Cardtext>
      <div className="card-bootom">
          <Link to={"/recipes/" + id}>View Recipe</Link>        
      </div>
    </Card>
   );
}

export default Recipe;