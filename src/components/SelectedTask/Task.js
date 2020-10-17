import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Task = (props) => {

    // const [task, setTask] = useState(props.task)
    const { title, name, picture,_id } = props.task;
    const { date, description,} = props.task.register

    const deleteTask = (id) => {
         fetch(`http://localhost:5000/taskDelete/${id}`, {    
         method: 'DELETE' 
            })
        .then(res => res.json())
        .then(result => {
            // const removeTask = task.filter(task =>task._id !== id)
            // setTask(removeTask)
            // console.log(data, removeTask);
        })
    }
    // console.log(task);
    return (
            <div className = "col-lg-3 col-md-4 col-sm-6 col-xs-12 py-3 mr-0">
                <Card style={{ width: '16rem', height: '28rem'}}>
                    <Card.Img variant="top" height = "220px"src={picture} />
                    <Card.Body>
                        <Card.Title>Title: {title}</Card.Title>
                        <Card.Text>
                           Name: {name}
                        </Card.Text>
                        <Card.Text>
                            Starting Date: {date}
                        </Card.Text>
                        <p>Description: {description}</p>
                    </Card.Body>
                    <Button onClick={()=> {deleteTask(_id)} } variant="primary">Cancel</Button>
                </Card>
            </div>
    );
};

export default Task;