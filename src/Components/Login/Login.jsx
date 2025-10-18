import React from 'react';
import { NavLink } from 'react-router';

const Login = () => {
    return (
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form >
        <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" name='name' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='email' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
       </form>
       <p>New to websites? please <NavLink to='/register' className='text-blue-500 hover:text-blue-700'>Register</NavLink></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;