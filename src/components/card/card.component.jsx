import React from "react";
import './card.styles.scss'

const Card = (props)=>{
    return(
        <div className="card-container">
           <img src={`https://i.pravatar.cc/150?img=${props.person.id+18}`} alt='' />
          <h1>{props.person.name}</h1>
          <p>{props.person.email}</p>
        </div>
    )
}

export default Card;