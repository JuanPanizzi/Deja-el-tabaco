import { useState } from 'react'

export function useCounter(){

    const [startCounter, setStartCounter] = useState(false)
    const [diasSinFumar, setDiasSinFumar] = useState(null)
    const [fechaInicioCounter, setFechaInicioCounter] = useState(null)
    
    function iniciarCounter(){
        //Cuando usuario inicia el counter, iniciamos el contador en true, y seteamos el dia actual relativo en el localStorage, tambien seteamos los días sin fumar
        setStartCounter(true)
        let fechaInicioDelCounter = new Date()
        localStorage.setItem('fechaInicioDelCounter', fechaInicioDelCounter)
        setFechaInicioCounter(fechaInicioDelCounter)
        setDiasSinFumar(0)
    }
    
    function resetCounter(){
        setStartCounter(false)
        setDiasSinFumar(0)
        localStorage.removeItem('fechaInicioDelCounter')
    }

    return { 
        startCounter,
        diasSinFumar,
        fechaInicioCounter,
        iniciarCounter,
        resetCounter,
}
}
