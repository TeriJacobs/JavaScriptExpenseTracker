import React, { useState } from 'react';
import img from './Frame2.png';

const LoginForm = ({Login, error}) => {
    const [details, setDetails] = useState({username:"", password:""});

    const submitHandler = (e) => {
        e.preventDefault();
        // alert('btn')
        Login(details);
    }


return (
<>
    <section className="header login-header-details">
    {(error !== "") ? (<div className="error">{error}</div>) :""}
    <div className="row mt-5">
        <div className="col-lg-5 col-md-12 col-sm-6 login-header-title pt-1 login-form-display">
            <h4 className="welcome-message">Welcome to your Expense Tracker</h4>
        </div>
        <div className="col-lg-7 col-md-12 col-sm-12">
            <form className="login-form login-form-display">
                <div className="row input-group input-group-sm ">
                    <div className="col-lg-4 col-md-12 col-sm-12 my-1">
                        <input type="text" className="form-control input-login-username" placeholder="username" onChange={e=> setDetails({...details, username: e.target.value})} value={details.username} />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 my-1">
                        <input type="password" className="form-control input-login-pin" placeholder="password" onChange={e=> setDetails({...details, password: e.target.value})} value={details.password} />
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 my-1" >
                        <button onClick={submitHandler} type="button" className="btn btn-outline-dark input-login-btn">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </section>
    <div className='container'>
    <img src={img} className="photo" alt="loginImage"></img>
    </div>
</>
)
}

export default LoginForm