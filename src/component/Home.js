import React from 'react';
import { Link } from 'react-router-dom';
import header from '../assets/header.png'

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-5 mt-5 lg:flex-row md:flex-col sm:flex-col'>
            <div className='w-[50%] text-center sm:text-center md:text-center lg:text-left'>
                <h2 className='text-xl md:text-2xl lg:text-4xl sm:text-xl'>Hard work beats talent when talent doesn't work hard.</h2>
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