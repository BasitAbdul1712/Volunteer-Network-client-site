import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import NewEvents from './NewEvents';

const AdminAddedEvents = () => {
    
    const [events, setEvents] = useState([])
    useEffect(() =>{
        fetch('https://dry-plains-95100.herokuapp.com/events', {
            method: 'GET',
            headers: {
                 'Content-Type': 'application/json',
                }
        })
        .then(res => res.json())
        .then(data => setEvents(data))
    },[])
    
// const {title, date, description} = props.event;

    return (
            <div className = "row">
                {
            events.map(event => <NewEvents event={event} ></NewEvents> )
            }
           
            </div>

    );
};

export default AdminAddedEvents;