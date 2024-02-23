import { Header } from '../newComponents/Header'
import { Form } from '../newComponents/Form'
import { useDatosUser } from '../hooks/useDatosUser'
import { NavLink, useNavigate } from 'react-router-dom'

export const Register = () => {

  const { handleChange, handleRegister, dataRegister } = useDatosUser()


  const navigate = useNavigate()
  console.log('se renderizo el componente Register')

  return (
    <>
    {
      !dataRegister.respuesta ? 
      <>
       <Header title={"¡Registrate!"} />

<section  className='mt-5  p-10  flex flex-col justify-between items-center'>

        <div className='sm:max-w-md lg:max-w-2xl  w-11/12 bg-white rounded-2xl '>
          <Form
            handleChange={handleChange}
            handleLoginRegister={handleRegister}
          />
        </div>

        <div className='sm:max-w-md lg:max-w-2xl   mt-10 p-6 flex-col shadow-2x rounded-2xl bg-white w-9/12 text-center'>
          <NavLink to={'/login'} className='underline hover:font-bold hover:text-violet-500  '>¿Ya tienes una cuenta?</NavLink>
        </div>

</section>
    
      </>
    :
    <section className='mt-5  p-10  flex flex-col justify-between items-center  mt-40'>

    <div className='sm:max-w-md lg:max-w-2xl  w-11/12 bg-white rounded-2xl p-10 flex-col shadow-2x rounded-2xl text-center '>
      
      <div className='text-xl font-bold '>
      <h2>¡Te has registrado correctamente!</h2>
      <h3>Por favor inicia sesión a continuación</h3>
      </div>
      <div>
      <button type='submit' onClick={()=>navigate('/login')} className='block mx-auto mt-7 w-9/12 p-2 hover:bg-blue-btn-hover bg-blue-btn font-bold border-solid border-2 border-black rounded-2xl text-center '>Iniciar Sesión</button>
      </div>
    </div>  
    </section>
  
  }
     
    </>

  )

}
