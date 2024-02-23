import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
      <div className="w-full bg-white p-4 shadow-navbar rounded-b-lg text-center sm:text-left text-sm sm:text-base ">
          {[
            ['Perfil', '/no-fumar/home'],
            ['Calculador de cigarros', '/no-fumar/calculador'],
            ['Noticias', '/no-fumar/noticias'],
            ['Links de interés', '/no-fumar/links'],
            // ['Estrategias', '/no-fumar/estrategias'],


          ].map(([titulo, url], index) => (
            <NavLink to={url} key={`${titulo}-${titulo[index]}`} className='mx-2 hover:font-bold hover:underline font-medium'>{titulo}</NavLink>
          ))}
         
      </div>
    </>
  )
}
