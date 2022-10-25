import React from 'react';
import { Link } from 'react-router-dom';

const CourseSidebar = ({ item }) => {
    const { id, name } = item;
    return (
        <div>
            <ul className="w-full m-2 menu bg-base-100 rounded-box">
                <li className="hover:border-l-2"><Link to={`/courses/${id}`}>{name}</Link></li>
            </ul>
        </div>
    );
};

export default CourseSidebar;