import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
const VolunteerDetails = (props) => {
    const [activities, setActivities] = useState()
const history = useHistory()
    const handleAddActivity = (id) =>{
        const url = `/register/${id}`;
       history.push(url)
    }
    // console.log(props);
    const { title, picture, id } = props.card;
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 px-3 mb-3">
            <Card onClick = {()=>{handleAddActivity(id)}} style={{ width: '16rem', borderRadius: '15px', cursor: 'pointer'}}>
                <Card.Img style={{ width: '100%', height: '220px'}} variant="top" src={picture} />
                <Card.Body className = "text-center text-light bg-primary" style={{ height: '80px'}}>
                    <Card.Title> {title} </Card.Title>
                 </Card.Body>
            </Card>
        </div>
    );
};

export default VolunteerDetails;