import React, { useState, useEffect } from 'react';
import eventsList from '../assets/eventsList.json'
import '../App.css'


import Event from './event'

function Events(){

    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents(eventsList);
    }, [])

    return(
        <section>
            <h1 className="title">Events</h1>
            { events.map((event) => {
                 return <Event event={ event } />
            })}
        </section>
    )

}

export default Events