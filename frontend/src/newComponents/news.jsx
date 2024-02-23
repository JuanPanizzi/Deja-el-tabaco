import React from 'react'

export const News = ({img, title, description}) => {
    
  return (
    <div>
      <div>
        <img src={img} alt='imagen de noticia'/>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
