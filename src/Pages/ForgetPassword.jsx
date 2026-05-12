import React, { useContext, useState } from 'react';
import { AuthContext } from '../Components/Provider/AuthProvider';
import { useLocation } from 'react-router';

const ForgetPassword = () => {
    const {sendPasswordResetEmailFunc}= useContext(AuthContext);
   const location = useLocation();

    const [email, setEmail] = useState(location.state || '');

    const handleResetPassword = (e) => {
        e.preventDefault();

        sendPasswordResetEmailFunc(email)
            .then(() => {
                alert('Reset email sent');

                window.location.href = "https://mail.google.com";
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600">

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md shadow-2xl">

                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    Reset Password
                </h2>

                <form onSubmit={handleResetPassword}>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full bg-white/20 text-white placeholder-white/60"
                        required
                    />

                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-5"
                    >
                        Reset Password
                    </button>

                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;