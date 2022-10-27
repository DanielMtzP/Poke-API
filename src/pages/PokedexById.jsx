import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Pokedex404 from '../components/PokedexId/Pokedex404'
import './styles/pokedexById.css'

const PokedexById = () => {

  const {id} = useParams()

  const [pokemon, setPokemon] = useState()

  const [hasError, setHasError] = useState(false)



  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
    .then(res => setPokemon(res.data))
    .catch(err => {
      console.log(err)
      setHasError(true)})
  }, [])

  console.log(pokemon)

  if(hasError){
    return <Pokedex404 />
  }
  

  return (
    <article >
      <header className='header_pokedex'>
        <img className='pokedex_img' src='/images/home/pokedex.png'/>
      </header>
      <main className='pokeIdCard'>
        <header>
          <div className={`card bg-${pokemon?.types[0].type.name}`}>
            <img className='poke_img' src={pokemon?.sprites.other['official-artwork'].front_default} alt='' />
          </div>
        </header>
        <section>
          <h1 className={`pokedex_number card-poke_name letter-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h1>
          <h2 className={`poke_name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
          <div className='features'>
            <h3 className='weight'>Weight<br></br>{pokemon?.weight}</h3>
            <h3 className='height'>Height<br></br>{pokemon?.height}</h3>
          </div>
          <div>
            <div className='types_container'>
              <h2 className='title_type'>Type</h2>
              <ul className='ul_type'>
                  {
                      pokemon?.types.map(type => (<li className={`type_poke bg-${pokemon?.types[0].type.name}`} key={type.slot}>{type.type.name}</li>))
                  }
              </ul>
            </div>
            <div>
              <h2>Abilities</h2>
              <ul>
                  {
                      pokemon?.abilities.map(ability => (<li key={ability.slot}>{ability.ability.name}</li>))
                  }
              </ul>
            </div>
            <div>
              <h2>Stats</h2>
              <ul>
                {
                    pokemon?.stats.map(stat => (
                        <li key={stat.stat.name}>
                            <span>{stat.stat.name}</span> <span >{stat.base_stat}</span>
                        </li>
                    ))
                }
              </ul>
            </div>
            <div>
              <h2>Moves</h2>
              <ul>
                  {
                      pokemon?.moves.map(move => (<li key={move.move.name}>{move.move.name}</li>))
                  }
              </ul>
            </div>
          </div>  
        </section>
      </main>
    </article>
  )
}

export default PokedexById