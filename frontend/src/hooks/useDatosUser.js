import axios from 'axios'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UsersContext } from '../providers/usersProvider'
// import {DataUser} from '../interfaces/DataUser'
// import {UsersContextType} from '../interfaces/userContext'


export const useDatosUser = () => {

  const [formData, setformData] = useState({})
  const [dataRegister, setDataRegister] = useState({})
  const [showHome, setShowHome] = useState(false)
  const [dataLogin, setDataLogin] = useState({})
  const { updateUserDataContext } = useContext(UsersContext)



  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    //Hago un @Post() desde el frontend a '/registro' 
    const url = "http://localhost:3000/usuarios/registro"

    const userData = {
      username: formData.username,
      password: formData.password,
      fechaInicio: null
    }
    try {
      const response = await axios.post(url, userData)

      if (response.status >= 200 && response.status <= 299) {

        console.log('en register, abajo es response.data:')
        console.log(response.data)

        setDataRegister(response.data) //{respuesta: 'felicidades X te has registrado correctamente'}
        // setTimeout(() => {
        //   setformData({})
        //   // POSIBLE BUG
        //   // setDataBack(null)          
        //   navigate("/login")
        // }, 3000);
      } else {
        throw new Error('Hubo un error en la petición. Intente realizar el registro nuevamente')
      }
    } catch (error) {
      console.error(error)
    }
  }


  const  handleLogin = async (e) => {

    e.preventDefault()
    const url = "http://localhost:3000/auth/login";
    const urlNavigate = "/usuarios/perfil";
    
    const userData = {
      username: formData.username,
      password: formData.password,
      // fechaInicio: null
    }
    try {

      //deberia obtener un DataUser =  DataUser {token: { access_token: string }, userProps: {username: string; fechaInicio: Date | null | string;}}
      const response  = await axios.post(url, userData)
      const data = response.data;

      if (response.status >= 200 && response.status <= 299) {

        console.log('en login, abajo es response.data:')
        console.log(data.token) //{token: {…}, userProps: {…}}
        console.log(data.token.access_token) //'eyasdlkj'
       
        //Guardo el token en el localStorage
        localStorage.setItem('token', data.token.access_token)

        //Guardo datos del usuario
        setDataLogin(data.userProps)
        sessionStorage.setItem('usuario', JSON.stringify(data.userProps))
        
        console.log('abajo response.data.userProps')
        console.log(data.userProps) // {username: 'Fito Paez', fechaInicio: null}
        
        setShowHome(true)

      } else {
        throw new Error('Hubo un error en la petición. Intente realizar el login nuevamente')
      }
    } catch (error) {
      console.error(error)
    }
  }    
    const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value })
    console.log('Abajo es formData')
    console.log(formData)

  }


  return {
    // handleSubmit,
    handleLogin,
    handleRegister,
    handleChange,
    formData,
    dataRegister,
    showHome,
    dataLogin
  }
}
