import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import action from '../actions/updateInfoAction'

import '../App.css'

function Event({ event }){
    const history = useHistory();
    const dispatch = useDispatch();

    function handeClick(){
        dispatch(action(event))
        history.push('/buy')
    }

    return(
            <article onClick={ handeClick } className="wrapper">
                <p className="date-box">{ event.date }</p>
                <div className="event-box">
                    <h2 className="event-artist">{ event.artist }</h2>
                    <p className="event-location">{ event.location }</p>
                    <p className="event-time">{ event.startTime } - { event.endTime }</p>
                    <p className="event-price">{ event.price }</p>
                </div>
            </article>
        
    )
}

export default Event