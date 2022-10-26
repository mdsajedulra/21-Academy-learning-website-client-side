import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Course from '../Course/Course';
import CourseSidebar from '../CourseSidebar/CourseSidebar';

const Courses = () => {
    const courses = useLoaderData()
    const { categories } = useContext(AuthContext);
    return (
        <div>
            <h1 className='my-16 text-4xl font-bold text-center'>Our Courses</h1>

            <div className='flex flex-col gap-3 sm:flex-col md:flex-col lg:flex-row'>
                <div className='w-full sm:w-full md:w-full lg:w-[20%]'>
                    <h1 className='text-2xl font-medium text-center'>All course Name</h1>
                    {
                        categories.map(item => <CourseSidebar key={item.id} item={item}></CourseSidebar>)
                    }
                </div>
                <div className='w-[80%] mx-auto  grid lg:grid-cols-3	sm:gird-cols-2 md:grid-cols-2'>
                    {
                        courses.map(course => <Course key={course._id} course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;