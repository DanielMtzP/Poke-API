import React from 'react'
import FormHome from '../components/Home/FormHome'
import Footer from '../components/shared/Footer'
import './styles/home.css'

const Home = () => {
  return (
    <article className='pokedex'>
      <img className='pokedex_img' src='/images/home/pokedex.png' alt=''/>
      <header className='pokedex_header'>
        <h2 className='pokedex_subtitle'>Hi Trainer!</h2>
        <p>Give me your name to see the pokedex</p>
      </header>
      <FormHome />
    </article>
  )
}

export default Home