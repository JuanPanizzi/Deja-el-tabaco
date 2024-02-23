/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Header } from '../newComponents/Header.jsx'
import { Counter } from '../newComponents/Counter'
import { Loader } from '../newComponents/Loader.jsx'

export const Home = () => {

  const usuario = JSON.parse(sessionStorage.getItem('usuario'));

  return (
    <>
      {usuario ? (
        <>
          <Header title={`¡Bienvenido ${usuario.username}!`} />
          <Counter fechaInicio={usuario.fechaInicio} />
          {/* <h1>aca va el counter</h1> */}
        </>
      ) : (
        <>
          <section className='mt-80 flex flex-col justify-between items-center'>
            <Loader />
          </section>
        </>
      )}
    </>
  );
      }  