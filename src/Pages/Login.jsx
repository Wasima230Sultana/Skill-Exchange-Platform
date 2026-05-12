import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const { signIn, setUser, signInWithPopupFunc } = useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        const loggedInUser = result.user;
        // setUser(loggedInUser);
        navigate(`${location.state ? location.state : "/"}`)
        // console.log(loggedInUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      })
  }


  const handleGoogleSignIn = () => {
    signInWithPopupFunc()
      .then((result) => {
        const loggedUser = result.user;
        // setUser(loggedUser)
        navigate(`${location.state ? location.state : "/"}`)
        console.log(loggedUser.email)
      })
      .catch(() => {

      })
  }

  const handleForgetPassword = ()=>{
    
  }

  return (
    <div className=' my-8 flex justify-center items-center'>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <h2 className='mt-4 font-bold text-2xl text-center'>Login Here</h2>

            <label className="label">Email</label>
            <input type="email"
              className="input"
              placeholder="Email"
              name='email' />

            <label className="label">Password</label>
            <input type="password"
              className="input"
              placeholder="Password"
              name='password' />

            <div><button  className="hover:underline cursor-pointer"
                onClick={handleForgetPassword}
                type="button">Forgot password?</button></div>
            {error && <p className='text-red-700'>{error}</p>}

            <button type='submit' className="btn btn-neutral mt-4">Login</button>
            {/* Google */}
            <button type='button' className="btn btn-neutral mt-4" onClick={handleGoogleSignIn}><FcGoogle />Login with Google</button>
            <p className="text-center text-sm text-gray-500">
              Don't have an account? <Link className="link link-hover" to="/auth/signup">Sign up</Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;