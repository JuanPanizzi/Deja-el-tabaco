import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Home } from '../pages/Home'
import { Estrategias } from '../pages/Estrategias'
import { Links } from '../pages/Links'
import { MainLayout } from '../pages/MainLayout'
import { Login } from '../newPages/Login'
import { Perfil } from '../pages/Perfil'
import { Home } from '../newPages/Home'
import { Register } from '../newPages/Register'
import { Noticias } from '../pages/Noticias'
import { CalculadorCigarros } from '../newPages/Calculador'

// import { RealHome } from '../pages/RealHome'

export const Rutas = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        {/* <Route index element={<RealHome />} /> */}
        <Route path='/no-fumar' element={<MainLayout/>} > 

        <Route path='home' element={<Home />} />
        <Route path='perfil' element={<Perfil />} />
        <Route path='links' element={<Links />} />
        <Route path='noticias' element={<Noticias />} />
        <Route path='calculador' element={<CalculadorCigarros />} />
        {/* <Route path='estrategias' element={<Estrategias />} /> */}
        
        
        </Route>

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}
