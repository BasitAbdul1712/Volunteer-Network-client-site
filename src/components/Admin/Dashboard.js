import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png'

const Dashboard = () => {
    const [allPeople, setAllPeople] = useState([])
    useEffect(() => {
        fetch('https://dry-plains-95100.herokuapp.com/adminsArea')
            .then(res => res.json())
            .then(data => setAllPeople(data))
    }, [])
    console.log(allPeople[0]);
    const deleteUser = (id) => {
        console.log('successful');
        fetch(`https://dry-plains-95100.herokuapp.com/taskDelete/${id}`, {    
         method: 'DELETE' 
            })
        .then(res => res.json())
        .then(result => {
             const removeTask = allPeople.filter(task =>task.id !== id)
             setAllPeople(removeTask)
            console.log(removeTask);
            console.log(result);
        })
    }
    return (
        <>
            <div className='pt-5 pl-5 container'>
                <div className="row">
                    <div className="col-md-3">
                        <img width='200' src={logo} alt="" />
                    </div>
                    <div style={{ paddingTop: '20px' }} className="col-md-9">
                        <h4 className='font-weight-bolder'>Volunteer register list</h4>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className="row">
                    <div style={{ marginTop: '20px' }} className="col-md-3">
                        <div className=" flex-column">
                            <div className=" mb-3">
                                <Link className="nav-link font-weight-bold btn btn-outline-primary active" to="/adminDashboard">
                                    <span><img height='30' src="https://i.ibb.co/Jc6ZbLQ/users.png" alt="" /></span>  Volunteer Resister List</Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link font-weight-bold btn btn-outline-primary" to="/adminAddEvent">
                                    <span><img height='30' src="https://i.ibb.co/fYcgC8L/add.png" alt="" /></span>  Add Event</Link>
                            </div>
                        </div>

                    </div>
                    <div style={{ height: 'auto', width: 'auto', marginTop: '20px', backgroundColor: ' #e6edf1' }} className="col-md-9">
                        <div style={{ height: 'auto', padding: '15px 15px 0px 15px', marginTop: '20px', borderRadius: '15px' }} className="card shadow ">

                            <table class="table table-hover">
                                <thead style={{ backgroundColor: ' #e6edf1', borderRadius: '15px' }}>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email-id</th>
                                        <th scope="col">Registering date</th>
                                        <th scope="col">Volunteer Work list</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {allPeople.map(user =>
                                        <tr key={user._id} >
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.register.date}</td>
                                            <td>{user.register.title}</td>
                                            <td><button onclick={() =>{deleteUser(user.id)}} class='btn btn-danger'><img height='20' src="https://i.ibb.co/MR2ZvS3/trash.png" alt="" /></button></td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;