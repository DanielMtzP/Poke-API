import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/Pokedex/CardPoke'
import InputSearch from '../components/Pokedex/InputSearch'
import Pagination from '../components/Pokedex/Pagination'
import SelectByType from '../components/Pokedex/SelectByType'
import './styles/pokedex.css'

const Pokedex = () => {
  
  const [pokemons, setPokemons] = useState()

  const [typeSelected, setTypeSelected] = useState('All Pokemons')

  useEffect(() => {
    if(typeSelected !== 'All Pokemons'){
      axios.get(typeSelected)
      .then(res => {
        const result = res.data.pokemon.map(e => e.pokemon)
        setPokemons(result)

      })
      .catch(err => console.log(err))   
    } else {
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
      axios.get(URL)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
    }
  }, [typeSelected])
  
  
  const userName = useSelector(state => state.userName)

  // Lógica de paginación
  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(9)
  const initialPoke = (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage

  return (
    <div>
      <header className='header_pokedex'>
        <img className='pokedex_img' src='/images/home/pokedex.png'/>
        <p><span className='welcome_name'>¡Welcome {userName}</span>, here you can find your favorite pokemon!.</p>
      </header>
      <aside>
        <div className='aside_search'>
          <InputSearch />
          <SelectByType setTypeSelected={setTypeSelected} setPage={setPage}/>
        </div>
        <Pagination setPage={setPage} page={page} pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)} />
      </aside>
      <main>
        <div className='card-container'>
          {
            pokemons?.slice(initialPoke,finalPoke).map(pokemon => (
              <CardPoke 
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default Pokedex