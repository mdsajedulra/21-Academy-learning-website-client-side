import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import google from '../../../assets/google.png'
import github from '../../../assets/github.png'

const Login = () => {

    const { createUserUsingGoogle, createUserUsingGithub } = useContext(AuthContext);

    const handleLoginForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }

    // google signin popup function
    const handleGoogleButton = () => {
        createUserUsingGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    // google signin popup function
    const handleGithubButton = () => {
        createUserUsingGithub()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <form onSubmit={handleLoginForm} className='flex justify-center'>
                <div className='w-2/6 my-20'>
                    <h2 className='text-2xl text-white'>Login to 21 Academy</h2>
                    <p>
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
                    <img src="https://lh3.googleusercontent.com/vlPqhpg8wo6JXcvD-RRVMQ45TnD2djO07U6TaIEoW7bO6Y3TE5ChuCLrBXm4-sLezHCouVecjgM2lAco93x0gPsvwmxjo4qsEYQdmNgbiqwtZhO8BCkugLAKoGsRUfZsMFO5owvi7MLGsCtk3pkMqhixti3YdJ3wyAyjAY8j-wHORJapCHCZ0l81iP0-PjhPulvHvTgxUQK_QdIebBL074SLoCmxTgzhl_jc0fu16nZgY3vIRWLqe9LxQGNf10iawHn7eGkf77XrT74m9tucNBQ_5tntnd_hBDY2trdYd_uLZZJ0AvVciRz9KdzE37qu1wP_mCpOuM6ljv2qce_Lf_UmKA53i2nrapo92lw3bB3muENgOqxV0dbCKXn7bqUtt9sAMtDw_YZUrzWPgON39Osomw4TS3RK15EKvebcJivjElSNBKU32VHo5ccKWij95Z5UFN5hfhZlxCCMS3aqgiVWypdUZXrJ00Ao_WoUr39Jz7lI7wFyswBloP7CmmY8tzkZpEOLc7dyp6d19t7vbi5slxVeG-vxRj1egwZQ2HvlawK6_uVBgrMxJcEltckLkJK6rl5Y9HulDSuPrWlbrUb1bkiV4eQCH4kC_uBT8yjtRqMGH8s_-Cj8Ie5T05_JQuLwtNe27dZqdbHzrK3Qx6RMffc1qRxRm9ZdSPA-sMS4eDpALEh2Zbg7J9u7wkTJn75wB6UrHMvNhDbZMR2XTEzxonZPyu-sBDxm_GvSQQ1dsaqX2M-3wKTtF99JwZpTLv22VC3w2m45BtmLBHJ76HURzyp327ps84i6xVUKy1KEwgKjasQfDTzThi7C79ZpVrCb1MomwEKbJOhZQo8iVGNsPsAhfYLv7p3jpteEp18dHNm80w_LIenNTEowhCnH--yzOOt6lwtlNiLDAPu5wUeHVYfihehjp8PRKNE8gRe3K1XBmfCwT34AlQ082sd53nV60QJ5yaYV_nlJmD04bebS0lfRl1NO2tEDcnNO-1uiiSkWHJpQxfc=s617-no?authuser=2" alt="" />

                </div>
            </form>
        </div>
    );
};

export default Login;