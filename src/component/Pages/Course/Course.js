import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { title, instructor, price, category_id, thumbnail_url } = course;
    return (
        <div>
            <div className="m-3 shadow-xl card bg-base-100">
                <figure><img className='w-full' src={thumbnail_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-base card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>CourseBy {instructor.name}</p>
                    <div className='flex justify-between'>
                        <span>${price}</span>
                        <Link to={`/courses/${category_id}`} className="btn btn-info btn-sm">See Details</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Course;