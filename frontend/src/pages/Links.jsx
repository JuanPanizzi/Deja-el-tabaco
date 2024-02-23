import tabaquismo from '../recursos/tabaquismo.jpg'
import estrategias from '../recursos/estrategias.jpg'
import efectos from '../recursos/efectos.jpg'
import motivos from '../recursos/motivos.jpg'
import healthy from '../recursos/healthy.jpg'
import centros from '../recursos/centros.jpg'
import contacto from '../recursos/contacto.jpg'
import { NavLink } from "react-router-dom"

export const Links = () => {


  const links = [
    { url: "https://www.argentina.gob.ar/salud/glosario/tabaquismo#:~:text=Es%20una%20enfermedad%20cr%C3%B3nica%20causada,de%20ellas%20t%C3%B3xicas%20y%20cancer%C3%ADgenas.", imagen: tabaquismo, info: "¿Que és el tabaquismo?" },
    { url: 'https://www.argentina.gob.ar/salud/consumo-de-tabaco/como-dejar-de-fumar/estrategias-para-dejar-de-fumar', imagen: estrategias, info: "Estrategias para dejar de fumar" },
    {
      url: "https://www.argentina.gob.ar/salud/consumo-de-tabaco/danios-en-la-salud",
      imagen: efectos,
      info: "Efectos en la salud"
    },
    { url: "https://www.paho.org/es/mas-100-razones-para-dejar-fumar", imagen: motivos, info: "Motivos para no fumar" },
    { url: "https://medlineplus.gov/spanish/ency/article/007532.htm",  imagen: healthy, info: "Beneficios al dejar de fumar"},
    { url: "https://www.argentina.gob.ar/salud/consumo-de-tabaco/como-dejar-de-fumar/centros-de-cesacion-tabaquica-en-la-argentina", imagen: contacto, info: "Centros de cesación tabaquica en Argentina"},
    { url: "https://buenosaires.gob.ar/salud/programasdesalud/listado-de-servicios-gratuitos-para-dejar-de-fumar", imagen: centros, info: "Centros de atención y servicios gratuitos para dejar de fumar en C.A.B.A"}
  ]

  
  return (

    <>
      <section className='mt-10 flex flex-wrap items-center justify-center p-10 '>

{
  links.map((obj,index)=> (



        <div key={`${obj[index]}-${obj.url}`} className='bg-white max-w-72 sm:max-w-64 mb-7 bg-white rounded-2xl shadow-2x mx-5 h-80 flex flex-col text-center'>

          <div className='basis-1/2 overflow-hidden'>
            <img src={obj.imagen} alt="" className='rounded-t-lg w-full h-full object-cover' />
          </div>


          <div className='p-3  basis-1/3'>
            <h1 className='font-bold text-lg'>{obj.info}</h1>
            {/* <p className='mt-3 block truncate ...'>{ }</p> */}
          </div>
          <div className='mb-2 w-8/12 mx-auto'>
            <NavLink className='block  p-1 hover:bg-blue-btn-hover bg-blue-btn border-solid border-2 border-black rounded-2xl text-center self-end' to={obj.url} target="_blank">Ver más</NavLink>
          </div>
        </div>


  ))

}

      </section>
    </>

  )
}
