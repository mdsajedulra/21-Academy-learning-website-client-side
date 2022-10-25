import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div>
            <h1 className='text-4xl'>All Course</h1>

            <div className='flex'>
                <div className='w-[20%] border'>
                    <h2>sidebar</h2>
                </div>
                <div className='w-[80%] border grid lg:grid-cols-3	sm:gird-cols-2 md:grid-cols-2'>
                    {
                        courses.map(course => <Course course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;