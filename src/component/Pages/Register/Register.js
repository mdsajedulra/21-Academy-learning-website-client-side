import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import google from '../../../assets/google.png'
import github from '../../../assets/github.png'

const Register = () => {

    const { createUser, createUserUsingGoogle, createUserUsingGithub, updateNamePhotoURL } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleRegisterForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);
        const userDetails = { name, photoURL };

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                updateNamePhotoURL(userDetails)
                    .then(result => {
                        const user = result.user;
                        console.log(user)
                    })
                    .catch(error => console.log(error))
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
            <form onSubmit={handleRegisterForm} className='flex justify-center'>
                <div className='w-2/6 my-20'>
                    <h2 className='text-2xl font-bold text-center'>Sign Up</h2>
                    <p className='mb-5 text-center'>
                        It's quick and easy.
                    </p>
                    <div className="w-full form-control ">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Type your full name" className="w-full input input-bordered" />
                    </div>
                    <div className="w-full form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name='photoURL' type="text" placeholder="Enter your valid photo URL" className="w-full input input-bordered " />
                    </div>
                    <div className="w-full form-control ">
                        <label className="label">
                            <span className="label-text">Email address</span>
                        </label>
                        <input name='email' type="email" placeholder="Type your email" className="w-full input input-bordered " />
                    </div>
                    <div className="w-full form-control ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="Password" className="w-full input input-bordered " />
                    </div>

                    <br />
                    <button type='submit' className="w-full btn btn-active btn-primary">Register</button>
                    <button onClick={handleGoogleButton} className="w-full mt-5 text-black bg-white rounded-full btn hover:bg-slate-200"><img className='w-[25px] m-2' src={google} alt="" /> Sign in with Google</button>
                    <button onClick={handleGithubButton} className="w-full mt-1 text-black bg-white rounded-full btn hover:bg-slate-200"><img className='w-[25px] m-2' src={github} alt="" /> Sign in with Github</button>

                    <p className='m-3'>Already have an account? <Link className='text-blue-600' to='/login'>Login in →</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default Register;