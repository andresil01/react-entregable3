import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./styles/cardResident.css"

const CardResident = ({url}) => {

    const [resident, setresident] = useState()

    useEffect(() => {
        axios.get(url)
        .then(res => setresident(res.data))
        .catch(err => console.log(err))
    }, [])

    

  return (
    <article className='card'>
        <header className='card_header'>
            <img className= "card_img" src={resident?.image} alt="" />
            <div className='card_container_status'>
                <div className={`card_circle_status ${resident?.status}`}></div>
                <span className='card_status'>{resident?.status}</span>
            </div>
        </header>
        <section className='card_body'>
            <h3 className='card_name'>{resident?.name}</h3>
            <ul className='card_list'>
                <li className='card_item'><span className='card_span'>Specie</span>{resident?.species}</li>
                <li className='card_item'><span className='card_span'>Origin</span>{resident?.origin.name}</li>
                <li className='card_item'><span className='card_span'>Episodes where appear</span>{resident?.episode.length}</li>
            </ul>
        </section>
    </article>
  )
}

export default CardResident