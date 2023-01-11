import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from "react-router-dom";

const Wrapper = styled.div`
  padding:100px 100px 10px 100px;
  
  h1 {
    font-size:42px;
  }
`

const Subheader = styled.p`
  font-weight:300;
  font-size:26px;
`

const Header = (createRecipe) => {
  return(
    <Wrapper>
    <h1>All Recipes</h1>
    <Subheader>Here you can view our most popular recipes by category: Dinner, Lunch, Breakfast, Copycat, Dessert, Appetizers, Holidays, Side Dishes, and our Recipe Roundups.</Subheader>
    <Link to={"/recipes"}>New Recipe</Link> 
    </Wrapper>
  )
}

export default Header