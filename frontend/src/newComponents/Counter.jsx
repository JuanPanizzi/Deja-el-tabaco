/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from 'axios';
import { formateDate} from '../hooks/helpers/formateDate'
import { useEffect, useState } from 'react';
import { getDiferenciaDias } from '../hooks/helpers/getDifDays';
// import '../styles/Counter.css'

export const Counter = ({fechaInicio}) => {

  //FechaInicio viene desde Home, que le llega desde el backend luego de hacer el login.

  const [fechaRender, setFechaRender] = useState(formateDate(fechaInicio))
  const [days, setDays] = useState(!fechaInicio ? 0 : getDiferenciaDias(fechaInicio))

  useEffect(() => {
    const difDays = getDiferenciaDias(fechaInicio)
    console.log(`la diferencia de dias es: ${difDays}`)
    
  }, [])
  
  //Esta funcion actualiza en la BD la fechaInicio del contador, y también la reinicia en null
  const updateDate = async (date) => {

    try {
      //obtengo el token
      const token = localStorage.getItem('token');

      //objeto de configuracion
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`, // Configurar el encabezado de autorización
          'Content-Type': 'application/json' // Especificar el tipo de contenido JSON
        }
      }
      const response = await axios.patch('http://localhost:3000/usuarios/updates', { fechaInicio: date }, config)
      
      if(response.status >= 200 && response.status <= 299){
        // console.log('abajo response.data en Counter')
        // console.log(response.data)
        setFechaRender(formateDate(date))
        setDays(0)
      }else{
        throw new Error('bad error')
      }

    } catch (error) {
      console.error(error)
    }
  }

    return (

      <>


  {
    ! fechaRender ?

    <section className=' flex flex-col justify-between items-center pt-10 mt-10' >
          <div className='lg:max-w-md md:w-6/12 sm:w-7/12 w-8/12 bg-white rounded-2xl shadow-2x p-7 text-center'>
          <h2 className='font-bold'>¡EMPIEZA A CONTAR LOS DÍAS SIN FUMAR!</h2>
          <button  className="hover:bg-blue-btn-hover bg-blue-btn font-bold border-solid border-2 border-black rounded-2xl px-4 py-1 mt-3" onClick={()=> updateDate(new Date().toISOString())}>Iniciar</button>
          </div>
    </section>
  :   
  <>
  <section className='flex flex-col justify-evenly items-center pt-10'>
      <div className=' lg:max-w-md md:w-6/12 sm:w-7/12 w-8/12 bg-white rounded-2xl shadow-2x p-7 text-center '>
      <h2 className='text-xl font-bold'>Días sin fumar</h2>
      <h3 className='text-6xl'>{days}</h3>
      </div>

      <div className='lg:max-w-md md:w-6/12 sm:w-7/12 w-8/12 bg-white rounded-2xl shadow-2x p-3 text-center mt-12'>
     <h2 className='font-bold text-lg'>Empezaste el día: {fechaRender}  </h2>
          <button  className="hover:bg-blue-btn-hover bg-blue-btn font-bold border-solid border-2 border-black rounded-2xl px-4 py-1 mt-3" onClick={()=> updateDate(null)}>Reiniciar</button>
      </div>
  </section>


</>
  
  }

</>

    )
  }
