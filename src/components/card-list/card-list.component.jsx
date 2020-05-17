import React from "react";
import { Card } from '../card/card.component'
import './card-list.styles.css'

export const CardList = props => {
    console.log('@CardList: props: ', props)
    return <div className='card-list'>
        { props.monsters.map(m => 
                <Card key={m.id} monster={m}/>
            ) 
        }
    </div>
    
}
export default CardList