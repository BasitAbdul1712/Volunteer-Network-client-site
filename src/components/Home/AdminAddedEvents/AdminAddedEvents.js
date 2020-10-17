import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import NewEvents from './NewEvents';

const AdminAddedEvents = () => {
    
    const [events, setEvents] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/events', {
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