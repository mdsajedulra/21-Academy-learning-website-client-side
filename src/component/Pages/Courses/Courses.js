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
            <h1 className='my-16 text-4xl text-center'>Our Courses</h1>

            <div className='flex'>
                <div className='w-[20%] border'>
                    {
                        categories.map(item => <CourseSidebar key={item.id} item={item}></CourseSidebar>)
                    }
                </div>
                <div className='w-[80%] border grid lg:grid-cols-3	sm:gird-cols-2 md:grid-cols-2'>
                    {
                        courses.map(course => <Course key={course._id} course={course}></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;