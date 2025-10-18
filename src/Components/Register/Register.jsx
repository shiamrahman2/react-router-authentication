import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { NavLink } from 'react-router';
import { auth } from '../../Firebase/Firebase.config';

const Register = () => {
    const handleOnSubmit=(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        console.log(name,email,password);
          createUserWithEmailAndPassword(auth,email,password)
           .then(result=>{
            console.log(result.user)
           }).catch(error=>{
            console.log(error);
           })
         
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleOnSubmit}>
        <fieldset className="fieldset">
             <label className="label">Name</label>
            <input type="text" name='name' className="input" placeholder="Your Name" />
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
       </form>
       <p>Already have a account? please <NavLink to='/login' className='text-blue-500 hover:text-blue-700'>Login</NavLink></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;