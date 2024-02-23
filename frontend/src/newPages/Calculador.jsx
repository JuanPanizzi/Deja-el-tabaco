import React, { useState } from 'react';

export const CalculadorCigarros = () => {

  const [paquetesPorSemana, setPaquetesPorSemana] = useState(0);
  const [cigarrosPorPaquete, setCigarrosPorPaquete] = useState(0);
  const [costoPorPaquete, setCostoPorPaquete] = useState(0);
  const [results, setResults] = useState()

  const calcularGastos = () => {
    const cigarrosPorSemana = paquetesPorSemana * cigarrosPorPaquete;
    const cigarrosPorMes = cigarrosPorSemana * 4;
    const gastosPorSemana = paquetesPorSemana * costoPorPaquete;
    const gastosPorMes = gastosPorSemana * 4;

    return {
      cigarrosPorSemana,
      cigarrosPorMes,
      gastosPorSemana,
      gastosPorMes
    };
  };

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultados = calcularGastos();
    console.log(resultados)
    setResults(resultados)
  };

  return (
    // <div>
    // <h2>Calculadora de Cigarrillos</h2>
    <section className='mt-5  p-10  flex flex-col justify-between items-center'>

      <div className='sm:max-w-80 lg:max-w-lg  w-9/12 bg-white rounded-2xl '>
        <form onSubmit={handleSubmit} className=' p-10 flex-col  shadow-2x rounded-2xl '>
          <label className='text-sm font-bold'>
            Paquetes por semana:
            <input type="number" value={paquetesPorSemana} onChange={(e) => handleChange(e, setPaquetesPorSemana)} className=' placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1  ' />
          </label>
          <br />
          <label className='text-sm font-bold'>
            Cigarros por paquete:
            <input type="number" value={cigarrosPorPaquete} onChange={(e) => handleChange(e, setCigarrosPorPaquete)} className=' placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1  ' />
          </label>
          <br />
          <label className='text-sm font-bold'>
            Costo por paquete $:
            <input type="number" value={costoPorPaquete} onChange={(e) => handleChange(e, setCostoPorPaquete)} className=' placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1  '/>
          </label>
          <br />
          <button type="submit" className='block mx-auto  w-8/12 p-2 hover:bg-blue-btn-hover bg-blue-btn font-bold border-solid border-2 border-black rounded-2xl text-center '>Calcular</button>
        </form>
      </div>
{
  results &&
       <div className='sm:max-w-80 lg:max-w-lg w-9/12  mt-7 p-4 flex-col shadow-2x rounded-2xl bg-white  text-center font-medium'>
      <ul>
      <li>Cigarros por mes: {results.cigarrosPorMes}</li>
      <li>Cigarros por semana: {results.cigarrosPorSemana}</li>
      <li>Gastos por mes: ${results.gastosPorMes} </li>
      <li>Gastos por semana: ${results.gastosPorSemana} </li>
      </ul>
</div>
}

    </section>
  );
};


// <section  className='mt-5  p-10  flex flex-col justify-between items-center'>

// <div className='sm:max-w-md lg:max-w-2xl  w-11/12 bg-white rounded-2xl '>
//   <Form
//     handleChange={handleChange}
//     handleLoginRegister={handleRegister}
//   />
// </div>

// <div className='sm:max-w-md lg:max-w-2xl   mt-10 p-6 flex-col shadow-2x rounded-2xl bg-white w-9/12 text-center'>
//   <NavLink to={'/login'} className='underline hover:font-bold hover:text-violet-500  '>¿Ya tienes una cuenta?</NavLink>
// </div>

// </section>




// export const Contador = () => {
//     return (
//       <>
//     <div>Contador</div>
//     <h1>Un contador que calcule la cantidad de cigarros que fuma en un mes, que fuma en un dia, que fuma en una semana</h1>
//     <h1>Calcular la cantidad de plata que se gasta, y la cantidad de plata que se podria ahorrar fumando X cigarros menos por dia</h1>
//     </>
//   )
// }
