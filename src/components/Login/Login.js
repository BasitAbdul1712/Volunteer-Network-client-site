import React from 'react';
import logo from '../../images/logos/Group 1329.png';
const Login = () => {
    return (
        <div style={{backgroundColor:'rgb(250, 248, 248)', width:'90%', height: '600px', marginTop:'100px'}} className="container py-1">
            <div className="row d-flex mt-5 flex-column">
                <img className='d-block mx-auto' src= {logo} width = '200' alt=""/>
            </div>
            <div style={{border: '1px solid grey', width:'400px', height:'280px', backgroundColor:'#fff', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'}} className = "col-md-5 mx-auto text-center mt-5 py-5">
                <div >
                    <h3>Login With</h3>
                     <button style= {{backgroundColor: '#fff', border: '1px solid grey', borderRadius: '20px', }} className=' my-3'> <img className='mr-5' height='30' src="https://i.ibb.co/9vjdGtz/google.png" alt=""/> <span className='mr-5'>Sign in with google</span> </button>
                     <p className='lead small'>Don't have An Account? <a href="">Create an account</a> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;