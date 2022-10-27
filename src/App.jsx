import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/shared/Footer'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexById from './pages/PokedexById'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex/:id' element={<PokedexById />}/>
          <Route path='/pokedex' element={<Pokedex/>}/>
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
