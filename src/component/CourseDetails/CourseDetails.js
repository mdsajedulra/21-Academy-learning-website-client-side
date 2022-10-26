import React from 'react';
import { FaRegFilePdf } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const CourseDetails = () => {
    const details = useLoaderData()

    const { title, instructor, thumbnail_url, category_id, total_enrollment, rating, price, overview } = details;

    return (
        <div className='mt-10'>
            {/* pdf genarate */}
            <Pdf targetRef={ref} filename={`${title} Course Details`}>
                {({ toPdf }) =>
                    <div className='flex justify-center '>
                        <button onClick={toPdf} className='flex items-center justify-center gap-2 p-3 mb-3 text-lg border rounded-lg'>
                            <FaRegFilePdf></FaRegFilePdf><span>Download Course Details</span>
                        </button>
                    </div>}
            </Pdf>
            <div ref={ref} className='flex flex-col-reverse gap-10 lg:flex-row md:flex-row'>
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
                <div className='lg:w-[45%] w-full sm:w-full md:w-full border rounded-md'>
                    <img className='w-full mb-5 rounded-md' src={thumbnail_url} alt="" />
                    <div className='m-5'>
                        <p className='font-bold text-right'>${price}</p>
                        <Link to={`/checkout/${category_id}`} className="w-full rounded-md btn btn-primary">Get premium access →</Link>
                        <div className='flex justify-between mt-2 font-bold'>
                            <p>Total Enroll: {total_enrollment}</p>
                            <p>Rating {rating.number}</p>
                        </div>

                    </div>

                </div>
            </div>
        </div >
    );
};

export default CourseDetails;