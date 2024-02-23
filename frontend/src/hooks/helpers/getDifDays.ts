// Obtener la fecha actual
// Función para calcular la diferencia de días
export const getDiferenciaDias = (fechaDeInicio: string): number=> {

    if(!fechaDeInicio){
        return 0;
    }

    //Primero establezco objetosDates con las fechas a calcular
    //fecha Actual
    const fechaActualUTC = new Date();
    const fechaActual = new Date(fechaActualUTC.getTime() + fechaActualUTC.getTimezoneOffset() * 60000); // Convertir a hora local

    //FechaInicio
    const fechaInicio = new Date(fechaDeInicio)

    // Establecer las fechas a medianoche para ignorar las horas, minutos y segundos
    fechaInicio.setUTCHours(0, 0, 0, 0);
    fechaActual.setUTCHours(0, 0, 0, 0);

    // Convertir las fechas a milisegundos
    const fechaActualms = fechaActual.getTime();
    const fechaInicioms = fechaInicio.getTime();

    // Calcular la diferencia en milisegundos
    const diferenciaMs = fechaActualms - fechaInicioms;

    // Convertir la diferencia de milisegundos a días
    const msPorDia = 1000 * 60 * 60 * 24;
    const diferenciaDias = Math.floor(diferenciaMs / msPorDia);

    return diferenciaDias;
}



// Calcular la diferencia de días
// const diferencia = diferenciaDeDias(fechaObtenida, fechaActual);
// console.log('La diferencia de días es:', diferencia);
