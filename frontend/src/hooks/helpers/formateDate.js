export const formateDate = (fechaString) =>{

  if(!fechaString){
    return null;
  }
    const fecha = new Date(fechaString);
    
    const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const fechaLegible = fecha.toLocaleString('es-ES', opciones);
    
    return fechaLegible;
    
  }