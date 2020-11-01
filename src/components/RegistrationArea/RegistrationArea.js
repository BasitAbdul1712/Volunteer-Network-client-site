import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import './RegistrationArea.css';
import logo from '../../images/logos/Group 1329.png'
const RegistrationArea = (props) => {
    const history = useHistory()
    const { id } = useParams();
    const [selectedActivity, setSelectedActivity] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    useEffect(() => {
        fetch('https://dry-plains-95100.herokuapp.com/activities/' + id)
            .then(res => res.json())
            .then(data => setSelectedActivity(data))
    }, [id])
    
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        // console.log('form submitted', data, selectedActivity)
        delete selectedActivity._id;
        const activityDetails = {...loggedInUser, ...selectedActivity, register: data}
        console.log(activityDetails, loggedInUser);
        fetch('https://dry-plains-95100.herokuapp.com/addTask', {
           method: 'POST',
           headers: {
               'Content-type': 'application/json'
           },
           body: JSON.stringify(activityDetails)
        })
        .then(response => response.json())
        .then(data =>history.push('/selectedTasks'))
    };

    return (
        <div className="d-flex flex-column container py-1 justify-content-center align-items-center" style={{backgroundColor:'rgb(250, 248, 248)', width:'95%', height: '600px', marginTop:'100px'}} > 
            <div >
                    <img className='d-block mx-auto' width= '200' src={logo} alt="" />
                </div>
            <div className='py-1 mt-3' style={{border: '1px solid #fff', width:'auto', height:'auto', backgroundColor:'#fff', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}}  >
                
                <div >
                    <h3 className='d-block mx-auto text-center'>Register as a Volunteer</h3>
                </div>
                <div>
                    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
                        {errors.name && <span className="error" >This Full Name is required</span>}

                        <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Username or Email" />
                        {errors.email && <span className="error" >Username or Email is required</span>}
            
                        <input name="date" id ="date" type="date" ref={register({ required: true })} placeholder="mm/dd/yyyy" />
                        {errors.date && <span className="error" >Date is required</span>}

                        <input name="description" id="description" ref={register({ required: true })} placeholder="Description" />
                        {errors.description && <span className="error" >Description is required</span>}

                        <input name="title" defaultValue={selectedActivity.title} ref={register({ required: true })} />
                        {errors.title && <span className="error" >Task Title is required</span>}

                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationArea;