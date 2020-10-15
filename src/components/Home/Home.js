import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import TitleSearch from './TitleSearch/TitleSearch';
import VolunteerDetails from './VolunteerDetails/VolunteerDetails';

const Home = () => {
    const [activities, setActivities] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/activities')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])
    return (
        <div className = "container bg">
        <Header></Header>
        <TitleSearch></TitleSearch>

        <div  className="row">
                {
                    activities.map(card => <VolunteerDetails card={card} ></VolunteerDetails> )
                }
        </div>
        </div>
    );
};

export default Home;