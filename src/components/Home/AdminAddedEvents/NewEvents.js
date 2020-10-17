import React from 'react';
import { Card } from 'react-bootstrap';

const NewEvents = (props) => {
    const { title, date, description } = props.event;
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 px-3 mb-3">
            <Card  style={{ width: '15rem', height: '10rem', borderRadius: '15px', cursor: 'pointer'}}>
                <Card.Body className = " text-bold " style={{ height: '80px', width: '100%'}}>
                    <Card.Title> Event title: {title} </Card.Title>
                    <Card.Text>
                       Event date: {date}
                        <br/>
                        Event description: {description}
                    </Card.Text>
                 </Card.Body>
            </Card>

        </div>
    );
};

export default NewEvents;