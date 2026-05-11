import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Components/Provider/AuthProvider';

const SignUp = () => {
    const {createUser,setUser,updateUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log({name,email,photoURL,password})
        createUser(email,password)
        .then(result=>{
            const createdUser = result.user;
            updateUser({displayName:name,photoURL:photoURL})
            .then(()=>{
                 setUser({...createdUser,displayName : name, photoURL:photoURL});
      navigate('/')
            })
            .catch((error)=>{
                setUser(createdUser);
            })
           
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <div className=' my-8 flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignUp} className="card-body">
                    <fieldset className="fieldset">
                        <h2 className='mt-4 font-bold text-2xl text-center'>SignUp Here</h2>

                        <label className="label">Name</label>
                        <input type="name"
                         className="input" 
                         placeholder="Enter your name"
                         name='name' />

                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name='email' />

                        <label className="label">Photo-URL</label>
                        <input type="text" className="input" placeholder="Enter photo URL" name='photoURL' />

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name='password' />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4" type="submit">Sign Up</button>
                        <p className="text-center text-sm text-gray-500">
                            Already have an account? <Link  className="link link-hover" to="/auth/login">Login</Link>
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default SignUp;