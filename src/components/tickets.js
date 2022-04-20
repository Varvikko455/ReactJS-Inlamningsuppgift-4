import React from 'react';
import { useSelector } from 'react-redux'

import style from './tickets.module.css'

function Tickets(){

    const event = useSelector((state) => {return state})

    return(
        <section className={ style.container }>
            <h1 className={ style.welcomeText }>Tack för din beställning</h1>
            <div className={ style.infoBox }>
                <p className={ style.what }>WHAT</p>
                <h1 className={ style.artist }>{ event.event.artist }</h1>
                <p className={ style.where }>WHERE</p>
                <p className={ style.location }>{ event.event.location }</p>
                <div className={ style.dateTime }>
                    <p className={ style.when }>WHEN</p>
                    <p className={ style.date }>{ event.event.date }</p>
                    <p className={ style.from }>FROM</p>
                    <p className={ style.startTime }>{ event.event.startTime }</p>
                    <p className={ style.to }>TO</p>
                    <p className={ style.endTime }>{ event.event.endTime }</p>
                </div>
            </div>
        </section>
    )
}
export default Tickets