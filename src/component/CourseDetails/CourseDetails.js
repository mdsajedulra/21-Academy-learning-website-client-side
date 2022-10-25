import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData()
    console.log(details)
    const { title, instructor, thumbnail_url, total_enrollment, rating, price, overview } = details;
    console.log(total_enrollment)
    return (
        <div className='flex gap-10 mt-10'>
            <div className='flex flex-col w-full gap-10'>
                <h1 className='text-5xl'>{title}</h1>
                <p>{details.details}</p>

                <div>
                    <h1 className='mb-2 text-2xl'>Instructor</h1>
                    <div className='flex items-center gap-2 p-4 border rounded-md'>

                        <img className='rounded-full w-14' src={instructor.img} alt="" />
                        <div>
                            <p>{instructor.name}</p>
                            <p>Instuctor, 21 Academy; Bestselling Author</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='mb-2 text-2xl'>What you will learn from this course</h1>
                    <div className='p-4 border rounded-md'>
                        {
                            overview.map(item => <li>{item}</li>)
                        }
                    </div>
                </div>
            </div>
            <div className='w-[45%] border rounded-md'>
                <img className='w-full mb-5' src={instructor.img} alt="" />
                <div className='m-5'>
                    <p className='font-bold text-right'>${price}</p>
                    <button className="w-full rounded-md btn btn-primary">Get premium access →</button>
                    <div className='flex justify-between mt-2 font-bold'>
                        <p>Total Enroll: {total_enrollment}</p>
                        <p>Rating {rating.number}</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default CourseDetails;