import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/input.css'

const InputSearch = () => {

    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
    }


  return (
    <form onSubmit={submit}>
        <input className='input' id='search' type='text' placeholder='Search a pokemon' />
        <button className='input_button'>Search</button>
    </form>
  )
}

export default InputSearch