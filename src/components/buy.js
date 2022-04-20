import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './buy.module.css'

function Buy(){

    const event = useSelector((state) => {return state})

    
    return(
        <section className={ style.container }>
            <h2 className={ style.welcomeText }>You are about to score some tickets to</h2>
            <h1 className={ style.artist }>{ event.event.artist }</h1>
            <div className={ style.dateTime }>
                <p className={ style.date }>{ event.event.date } </p>
                <p>kl { event.event.startTime } - { event.event.endTime }</p>
            </div>
            <p className={ style.location }>@{ event.event.location }</p>
            <p className={ style.price }>{ event.event.price }</p>
            <Link to="/tickets"><button className={ style.button }>Beställ</button></Link>
        </section>
    )
}

export default Buy