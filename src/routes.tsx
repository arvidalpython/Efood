import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import PageDetails from './pages/Detalhes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categories />} />
    <Route path="/detalhes" element={<PageDetails />} />
  </Routes>
)

export default Rotas
