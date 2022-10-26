import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import google from '../../../assets/google.png'
import github from '../../../assets/github.png'

const Login = () => {

    const { createUserUsingGoogle, createUserUsingGithub, logIn } = useContext(AuthContext);
    // private route redirect
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    // hand login from
    const handleLoginForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    // google signin popup function
    const handleGoogleButton = () => {
        createUserUsingGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });

            })
            .catch(error => console.log(error))
    }
    // github signin popup function
    const handleGithubButton = () => {
        createUserUsingGithub()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <form onSubmit={handleLoginForm} className='flex justify-center'>
                <div className='w-2/6 my-20'>
                    <h2 className='text-2xl font-bold text-center'>Login to 21 Academy</h2>
                    <p className='mb-5 text-center'>
                        It's quick and easy.
                    </p>
                    <div className="w-full form-control ">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input name='email' type="text" placeholder="Type here" className="w-full input input-bordered " />
                    </div>
                    <div className="w-full form-control ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="Password" className="w-full input input-bordered " />
                    </div>
                    <br />
                    <button type='submit' className="w-full btn btn-active btn-primary">login</button>
                    <button onClick={handleGoogleButton} className="w-full mt-5 text-black bg-white rounded-full btn hover:bg-slate-200"><img className='w-[25px] m-2' src={google} alt="" /> Sign in with Google</button>
                    <button onClick={handleGithubButton} className="w-full mt-1 text-black bg-white rounded-full btn hover:bg-slate-200"><img className='w-[25px] m-2' src={github} alt="" /> Sign in with Github</button>

                    <p className='m-3'>New to 21 Academy? <Link className='text-blue-600' to='/register'>Create an account.</Link></p>


                </div>
            </form>
        </div>
    );
};

export default Login;