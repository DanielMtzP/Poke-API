import axios from 'axios'
import React, {useEffect, useState} from 'react'
import './styles/selectByType.css'

const SelectByType = ({setTypeSelected, setPage}) => {

    const URL = 'https://pokeapi.co/api/v2/type'

    const [types, setTypes] = useState()

    useEffect(() => {
        axios.get(URL)
        .then(res => setTypes(res.data.results))
        .catch(err => console.log(err))
    }, [])
    
    const handleChange = e => {
        setTypeSelected(e.target.value)
        setPage(1)
    }

  return (
    <select className='select' onChange={handleChange}>
        <option value='All Pokemons'>All Pokemons</option>
        {
            types?.map( type => (
                <option key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectByType