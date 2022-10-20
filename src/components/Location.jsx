import React from 'react'
import "./styles/Location.css"

const Location = ({location}) => {


  return (
    <article className='card_location'>
        <h2 className='card_location_name'>{location?.name}</h2>
        <ul className='card_location_info'>
            <li ><span >Type: </span>{location?.type}</li>
            <li ><span >Dimension: </span>{location?.dimension}</li>
            <li ><span >Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default Location