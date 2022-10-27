import React from 'react'
import { Link } from 'react-router-dom'

const Pokedex404 = () => {
  return (
    <>
        <h1>Pokemon not found :(</h1>
        <br></br>
        <Link to='/pokedex'>Try again...</Link>
    </>
    

  )
}

export default Pokedex404