import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import FakeData from '../../FakeData.json'
const RegistrationArea = (props) => {
    const {id} = useParams();
    const [selectedActivity, setSelectedActivity] = useState({})
    useEffect(()=>{
        fetch('http://localhost:5000/activities/' + id)
        .then(res => res.json())
        .then(data => setSelectedActivity(data))
    }, [id]) 
    return (
        <div>
            <h1>Registration area is here {selectedActivity.title}</h1>
        </div>
    );
};

export default RegistrationArea;