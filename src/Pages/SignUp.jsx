import React from 'react';
import { Link } from 'react-router';

const SignUp = () => {
    return (
           <div className=' my-8 flex justify-center items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
                        <h2 className='mt-4 font-bold text-2xl text-center'>SignUp Here</h2>

          <label className="label">Name</label>
          <input type="name" className="input" placeholder="Enter your name" />

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Photo-URL</label>
          <input type="text" className="input" placeholder="Enter photo URL" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
          <p className="text-center text-sm text-gray-500">
            Already have an account? <Link className="link link-hover" to="/auth/login">Login</Link>
          </p>
        </fieldset>
      </div>
    </div>
        </div>
    );
};

export default SignUp;