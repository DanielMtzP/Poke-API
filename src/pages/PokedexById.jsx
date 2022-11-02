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
    <article className='PokeById' >
      <header className='header_pokedex'>
        <img className='pokedex_img' src='/images/home/pokedex.png'/>
      </header>
      <main className='pokeIdCard'>
        <section>
          <div className={`card bg-${pokemon?.types[0].type.name}`}>
            <img className='poke_img' src={pokemon?.sprites.other['official-artwork'].front_default} alt='' />
          </div>
        </section>
        <section className='pokeinf'>
          <h1 className={`pokedex_number card-poke_name letter-${pokemon?.types[0].type.name}`}>#{pokemon?.id}</h1>
          <h2 className={`poke_name letter-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
          <div className='features'>
            <h3 className='weight'><span className='features_span'>Weight</span> {pokemon?.weight}</h3>
            <h3 className='height'><span className='features_span'>Height</span>{pokemon?.height}</h3>
          </div>
          <div className='pokeinf_more'>
            <div className='types_container'>
              <h2 className='title_type'>Type</h2>
              <ul className='ul_type'>
                  {
                      pokemon?.types.map(type => (<li className={`type_poke bg-${pokemon?.types[0].type.name}`} key={type.slot}>{type.type.name}</li>))
                  }
              </ul>
            </div>
            <div className='abilities_container'>
              <h2 className='title_abilities'>Abilities</h2>
              <ul className='ul_ability'>
                  {
                      pokemon?.abilities.map(ability => (<li className='ability_poke' key={ability.slot}>{ability.ability.name}</li>))
                  }
              </ul>
            </div>
            <div className='stats_container'>
              <h2 className='title_stats'>Stats</h2>
              <ul className='ul_stats'>
                {
                    pokemon?.stats.map(stat => (
                        <li className='stats_poke' key={stat.stat.name}>
                            <span>{stat.stat.name}:</span> <span >{stat.base_stat}/255</span>
                        </li>
                    ))
                }
              </ul>
            </div>
            <div className='moves_container'>
              <h2 className='title_moves'>Moves</h2>
              <ul className='ul_moves'>
                  {
                      pokemon?.moves.map(move => (<li className='moves_poke' key={move.move.name}>{move.move.name}</li>))
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