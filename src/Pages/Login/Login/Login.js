import { getAuth } from '@firebase/auth';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const auth = getAuth();
    
    const {signInUsingGoogle} = useAuth();

    return (
        <div className="mx-auto w-50 mb-5 h-100">
            <h2 className="mt-5">Please Login</h2>
            <button onClick={signInUsingGoogle} className="btn btn-dark mt-5 mb-5 px-5">Google Sign In</button>


        </div>
    );
};

export default Login;