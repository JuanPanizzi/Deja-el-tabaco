// import '../styles/Register.css'

export const Form = ({handleChange, handleLoginRegister}) => {

  return (
    <form onSubmit={(e)=> handleLoginRegister(e)} className=' p-10 flex-col  shadow-2x rounded-2xl w-full'>
            <label htmlFor="inputUsername" className='text-xl font-bold'>Usuario: 
            </label>
                <input id='inputUsername' type="text" name='username' className=' placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base text-left ' 
                placeholder='Lionel Andrés Inies' onChange={(e)=>handleChange(e)}/>
            
            <label htmlFor="inputPassword" className='text-xl font-bold '>
            Contraseña: 
            </label>
              <input id='inputPassword' type="password" name='password' className='placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base' 
              placeholder='********' onChange={(e)=>handleChange(e)}/>
            <button type='submit' className='block mx-auto mt-7 w-9/12 p-2 hover:bg-blue-btn-hover bg-blue-btn font-bold border-solid border-2 border-black rounded-2xl text-center '>Enviar</button>
        </form>
  )
}
