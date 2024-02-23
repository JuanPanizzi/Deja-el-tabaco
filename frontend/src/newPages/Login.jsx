/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'
import { Header } from '../newComponents/Header'
import { useDatosUser } from '../hooks/useDatosUser'
import { Form } from '../newComponents/Form'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UsersContext } from '../providers/usersProvider'
import { Loader } from '../newComponents/Loader'


export const Login = () => {

  const [loading, setLoading] = useState(false)
  const { handleChange, handleLogin, dataLogin } = useDatosUser()

  const navigate = useNavigate()
  
  useEffect(() => {

    if (dataLogin.username) {
      setLoading(true)
      setTimeout(() => {
        navigate('/no-fumar/home')
      }, 3000);
    }
    return () => {
      setLoading(false)
    }
  }, [dataLogin])


  return (
    <>
      {
        !loading ?
          <>
            <Header title={"¡Inicia Sesión!"} />
            <section className='mt-5  p-10  flex flex-col justify-between items-center'>

              <div className='sm:max-w-md lg:max-w-2xl  w-11/12 bg-white rounded-2xl'>
                <Form
                  handleChange={handleChange}
                  handleLoginRegister={handleLogin}
                />

              </div>

              {/* <h3>{dataBack.respuesta}</h3> */}
            </section>
          </>
          :
          <>
            <section className='mt-80 flex flex-col justify-between items-center'>

             <Loader/>

            </section>
          </>

      }
    </>

  )
}
