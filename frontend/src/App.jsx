/* eslint-disable react-hooks/exhaustive-deps */
import { Rutas } from './Rutas/Rutas.jsx'
import { UsersProvider } from './providers/usersProvider.jsx'

function App() {
  
  return (
    <UsersProvider>
    <Rutas/>
    </UsersProvider>
  )
}

export default App
