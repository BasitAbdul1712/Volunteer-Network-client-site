import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Task = (props) => {
    console.log(props.task);
    const { title, name, picture } = props.task;
    const { date, description } = props.task.register
    return (
            <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12 py-3 mr-0">
                <Card style={{ width: '16rem', height: '28rem'}}>
                    <Card.Img variant="top" height = "220px"src={picture} />
                    <Card.Body>
                        <Card.Title>Title:{title}</Card.Title>
                        <Card.Text>
                           Name: {name}
                        </Card.Text>
                        <Card.Text>
                            Starting Date: {date}
                        </Card.Text>
                        <p>Description: {description}</p>
                    </Card.Body>
                    <Button variant="primary">Cancel</Button>
                </Card>
            </div>
    );
};

export default Task;