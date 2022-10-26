import React from 'react';
import { useLoaderData } from 'react-router-dom';
import congres from '../../../assets/congrats.png'


const CheckOut = () => {
    const accessData = useLoaderData();
    console.log(accessData)
    const { title, thumbnail_url, instructor, overview } = accessData;
    return (
        <div className='block w-full h-[100vh]'>
            <div className='text-white bg-black h-60'>
                <div className='w-2/3 mx-auto ' >
                    <h1 className='pt-24 text-5xl'>{title}</h1>

                    <div className='flex items-center justify-between gap-5 p-6 mx-auto mt-5 text-black bg-white border rounded-lg '>
                        <div>
                            <div className='flex items-center mb-3'>
                                <span className='text-3xl'>Welcome</span> <img className='w-10' src={congres} alt="" />
                            </div>
                            <p>You have Successfully enrolled in the course</p>
                        </div>
                        <img className='w-2/5 rounded-md' src={thumbnail_url} alt="" />

                    </div>
                    <div className='mt-5 text-black'>
                        <h1 className='mb-2 text-2xl'>Instructor</h1>
                        <div className='flex items-center gap-2 p-4 border rounded-md'>

                            <img className='rounded-full w-14' src={instructor.img} alt="" />
                            <div>
                                <p>{instructor.name}</p>
                                <p>Instuctor, 21 Academy; Bestselling Author</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;