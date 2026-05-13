import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { Link, useLocation } from 'react-router';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
    const { sendPasswordResetEmailFunc, user, setUser } = useContext(AuthContext);
    const location = useLocation();
    const emailRef = useRef(null);
    // const [email, setEmail] = useState(location.state || '');
    console.log(location)

    const handleResetPassword = (e) => {
        //  console.log('forget password',emailRef.current.value)
        e.preventDefault();
        const email = emailRef.current.value;
        console.log(email)
        sendPasswordResetEmailFunc(email)
            .then(() => {
                //  setLoading(false);
                toast.success(`Reset email sent to ${email}`)
                // window.location.href = "https://mail.google.com";
            })
            .catch((error) => {
                // console.log(error.message)
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100">

            <div className="bg-white backdrop-blur-lg p-8 rounded-2xl w-full max-w-md shadow-2xl">

                <h2 className="text-3xl font-bold text-black text-center mb-6">
                    Reset Password
                </h2>

                <form onSubmit={handleResetPassword}>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        ref={emailRef}
                        // defaultValue={email}
                // state={emailRef.current?.value}

                        className="input input-bordered w-full bg-white/20 text-black "
                        required
                    />

                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-5"
                    >
                        Reset Password
                    </button>
                    <p className='text-center text-gray-500'>---or---</p>
                    <Link className='mt-2 w-full btn btn-primary' to={'/auth/login'}>Go back </Link>


                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;




