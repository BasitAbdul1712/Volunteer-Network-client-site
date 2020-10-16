import React, { useEffect, useState } from 'react';
import Task from './Task';
import logo from '../../images/logos/Group 1329.png'
import Header from '../Header/Header';

const SelectedTask = () => {
    const [selectedTasks, setSelectedTasks] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/addTask/taskId')
        .then(res => res.json())
        .then(data => setSelectedTasks(data))
    }, [])
    return (
        
        <div  className ="container">
            <Header></Header>
            <div style={{ paddingTop: '50px' }} className ="row">
            {
                selectedTasks.map(task =><Task task={task} ></Task>)
            }
            </div>
        </div>
    );
};

export default SelectedTask;