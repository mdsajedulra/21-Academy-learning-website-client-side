import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData()
    console.log(details)
    const { title, instructor, thumbnail_url, total_enrollment, rating, price, overview } = details
    return (
        <div className='flex gap-10 mt-10'>
            <div className='flex flex-col w-2/4 gap-10'>
                <h1 className='text-5xl'>{title}</h1>
                <p>{details.details}</p>

                <div>
                    <h1 className='text-3xl '>Instructor</h1>
                    <div className='flex items-center gap-2 p-4 border rounded-md'>

                        <img className='rounded-full w-14' src={instructor.img} alt="" />
                        <div>
                            <p>{instructor.name}</p>
                            <p>Instuctor, 21 Academy; Bestselling Author</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl '>What you will learn from this course</h1>
                    <div className='p-4 border rounded-md'>
                        {
                            overview.map(item => <li>{item}</li>)
                        }
                    </div>
                </div>
            </div>
            <div className='w-2/4'>
                <img src={instructor.img} alt="" />

            </div>
        </div>
    );
};

export default CourseDetails;