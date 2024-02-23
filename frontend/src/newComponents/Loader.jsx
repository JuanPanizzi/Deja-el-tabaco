import React from 'react'

export const Loader = () => {
  
  return (

    <div className='sm:max-w-md lg:max-w-xl  w-11/12 bg-white rounded-2xl shadow-2x rounded-2xl text-center p-3'>

    <h1 className='font-bold text-2xl'>Cargando...</h1>
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status">
        

      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span>
    </div>
  </div>


  )
}
