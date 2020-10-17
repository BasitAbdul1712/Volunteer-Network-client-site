import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import AdminAddedEvents from './AdminAddedEvents/AdminAddedEvents';
import TitleSearch from './TitleSearch/TitleSearch';
import VolunteerDetails from './VolunteerDetails/VolunteerDetails';

const Home = () => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/activities')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])


    return (
        <div className="container bg">
            <Header></Header>
            <TitleSearch></TitleSearch>

            <div className="row">
                {
                    activities.map(card => <VolunteerDetails card={card} ></VolunteerDetails>)
                }
            </div>

            <div>
                <div style={{border: '1px solid #fff', marginBottom: '20px'}} className = "Car shadow">
                    <h3>Added events by the admin</h3>
                </div>
                <div>
                <AdminAddedEvents></AdminAddedEvents>
                </div>
            </div>
           
        </div>
    );
};

export default Home;