import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png'
import Header from '../Header/Header';
const AdminEvent = () => {

    const addEvent = () =>{
        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const description = document.getElementById('description').value;
        const file = document.getElementById('file').value;

        const data = {title: title, date: date, description: description, file: file}
        console.log(data);
        fetch('http://localhost:5000/addEvent', {
           method: 'POST',
           headers: {
               'Content-type': 'application/json'
           },
           body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data =>console.log(data))
    };

    return (
        <>
        <Header></Header>
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
                    <div style={{ height: '80vh', marginTop: '20px', backgroundColor: ' #e6edf1' }} className="col-md-9 ">
                        <div style={{marginTop: '20px'}} className="py-3 pl-3 pt-3 mr-3 px-3 card shadow">
                            <form class="needs-validation" novalidate>
                                <div class="form-row">
                                    <div class="col-md-6 mb-3">
                                        <label className="font-weight-bold " for="title">Event Title</label>
                                        <input type="text" class="form-control" id="title" placeholder="Event Title" required />
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label className="font-weight-bold " for="date">Event Date</label>
                                        <input class="form-control" id="date" type="date" required />
                                        <div class="valid-feedback">
                                            Looks good!
                                            </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label className="font-weight-bold " for="description">Description</label>
                                            <textarea class="form-control" placeholder="Enter Designation" id="description" rows="3"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label className="font-weight-bold " for="file">Banner</label>
                                        <br />
                                        <input className="font-weight-bold" type="file" class="" id="file" />
                                        <div class="valid-feedback">
                                            Looks good!
                                            </div>
                                    </div>
                                </div>
                                <button onClick = {addEvent} class="btn btn-primary" type="submit">Submit form</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminEvent;