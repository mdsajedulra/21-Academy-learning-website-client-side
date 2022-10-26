import React from 'react';
import { Link } from 'react-router-dom';
import header from '../assets/header.png'

const Home = () => {
    return (
        <div className='flex items-center justify-center gap-5 mt-5'>
            <div className='w-[50%]'>
                <h2 className='text-5xl'>Hard work beats talent when talent doesn't work hard.</h2>
                <br />
                <Link to='/courses' className="btn btn-primary">See Our Best Courses</Link>

            </div>
            <div className='w-[40%]'>
                <img className='w-full p-10 border-4 rounded-3xl' src={header} alt="" />
            </div>
        </div>
    );
};

export default Home;