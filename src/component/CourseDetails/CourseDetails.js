import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData()
    console.log(details)
    const { title, instructor, thumbnail_url, total_enrollment, rating, price, overview } = details
    return (
        <div className='flex'>
            <div className='w-2/4'>
                <h1>{title}</h1>
                <p>{details.details}</p>
                <div>
                    <img src={instructor.img} alt="" />
                    <p>{instructor.name}</p>
                </div>
                <div >
                    {
                        overview.map(item => <li>{item}</li>)
                    }
                </div>
            </div>
            <div className='w-2/4'>
                <img src={instructor.img} alt="" />
            </div>
        </div>
    );
};

export default CourseDetails;