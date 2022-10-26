import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegisterForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <form onSubmit={handleRegisterForm} className='flex justify-center'>
                <div className='w-2/6 my-20'>
                    <h2 className='text-2xl text-white'>Sign Up</h2>
                    <p>
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
                    <p className='m-3'>Already have an account? <Link className='text-blue-600' to='/login'>Login in →</Link> </p>
                </div>
            </form>
        </div>
    );
};

export default Register;