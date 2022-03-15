import React from "react";
import './card-list.styles.scss'
import Card from "../card/card.component";

const CardList =(props)=>{
    return(
        <div className="card-list">
            {props.people.map(person=><Card key={person.id} person={person} />)}
        </div>

    )
}

export default CardList;