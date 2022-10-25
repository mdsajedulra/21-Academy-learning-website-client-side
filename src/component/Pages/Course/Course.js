import React from 'react';
import demoPicture from '../../../assets/21academy.png'
const Course = ({ course }) => {
    const { title, instructor, price } = course;
    return (
        <div>
            <div className="m-3 border shadow-xl card bg-base-100">
                <figure><img className='w-[100px]' src={demoPicture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>CourseBy {instructor.name}</p>
                    <div className='flex justify-between'>
                        <span>$ {price}</span>
                        <button className="btn btn-info btn-sm">See Details</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Course;