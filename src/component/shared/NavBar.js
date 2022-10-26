import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/21academy.png'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaBars, FaUserGraduate } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const NavBar = () => {
    const notify = () => toast('Toggle is on');
    const off = () => toast('Toggle is off');

    const { user, logOut } = useContext(AuthContext);
    // logout
    const handleLogOut = () => {
        logOut()
    }
    //hand toggle button
    const [change, setChange] = useState(false)
    console.log(change)
    const handleToggleBtn = (event) => {
        setChange(event.target.checked)
    }

    return (
        <div>

            {
                (change === true) ?

                    <div className="text-white bg-black border-b-2 navbar" >


                        <div className="flex-1">
                            <Link to='/' className="text-xl normal-case btn btn-ghost">
                                <img className='w-[50px]' src={logo} alt="" />
                                <p> 21 Academy</p>
                            </Link>
                        </div>
                        <div className="flex-none gap-2">
                            <div className="flex-none hidden sm:hidden md:hidden lg:block ">
                                <ul className="p-0 menu menu-horizontal">
                                    <li>
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li tabIndex={0}>
                                        <Link to='/courses'>Courses</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>FAQ</Link>
                                    </li>
                                    <li>
                                        <Link to='/blog'>Blog</Link>
                                    </li>
                                    <label className="cursor-pointer label">

                                        <input onClick={handleToggleBtn} type="checkbox" className="toggle" />
                                    </label>
                                </ul>
                            </div>


                            {
                                user ?
                                    <div className="dropdown dropdown-end">


                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                                            <div className="w-10 rounded-full" >

                                                {
                                                    user?.photoURL ?
                                                        <div>
                                                            <div className="tooltip tooltip-bottom" data-tip='hi my name is sajedul'>

                                                                <img src={user?.photoURL} alt='user pictur' />
                                                            </div>

                                                        </div>
                                                        :
                                                        <span className='flex items-center justify-center'> <FaUserGraduate /></span>
                                                }
                                            </div>
                                        </label>

                                        <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                                            <li><button onClick={handleLogOut}>Logout</button></li>
                                        </ul>
                                    </div>
                                    :
                                    <>
                                        <div className="flex-none">
                                            <ul className="gap-3 p-0 menu menu-horizontal">
                                                <li className='border hover:bg-[#6419E6] hover:text-white border-white rounded-full '>
                                                    <Link to='/login'>log in</Link>
                                                </li>
                                                <li className='bg-[#6419E6] rounded-full text-white'>
                                                    <Link to='/Register'>Register</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </>
                            }
                            <div className="block dropdown dropdown-end sm:block md:block lg:hidden">
                                <label tabIndex={0} className="btn btn-ghost rounded-btn"><FaBars /></label>
                                <ul tabIndex={0} className="p-2 mt-4 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                                    <div className="flex-none">
                                        <ul className="p-0 menu menu-vertical">
                                            <li>
                                                <Link to='/'>Home</Link>
                                            </li>
                                            <li tabIndex={0}>
                                                <Link to='/courses'>Courses</Link>
                                            </li>
                                            <li>
                                                <Link to='/'>FAQ</Link>
                                            </li>
                                            <li>
                                                <Link to='/blog'>Blog</Link>
                                            </li>
                                            <label className="cursor-pointer label">

                                                <input type="checkbox" className="toggle" />
                                            </label>
                                        </ul>
                                    </div>
                                </ul>
                            </div>

                        </div>
                    </div >
                    :
                    <div className="border-b-2 bg-base-100 navbar" >


                        <div className="flex-1">
                            <Link to='/' className="text-xl normal-case btn btn-ghost">
                                <img className='w-[50px]' src={logo} alt="" />
                                <p> 21 Academy</p>
                            </Link>
                        </div>
                        <div className="flex-none gap-2">
                            <div className="flex-none hidden sm:hidden md:hidden lg:block ">
                                <ul className="p-0 menu menu-horizontal">
                                    <li>
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li tabIndex={0}>
                                        <Link to='/courses'>Courses</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>FAQ</Link>
                                    </li>
                                    <li>
                                        <Link to='/blog'>Blog</Link>
                                    </li>
                                    <label className="cursor-pointer label">

                                        <input onClick={handleToggleBtn} type="checkbox" className="toggle" />
                                    </label>
                                </ul>
                            </div>


                            {
                                user ?
                                    <div className="dropdown dropdown-end">


                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                                            <div className="w-10 rounded-full" >

                                                {
                                                    user?.photoURL ?
                                                        <div>
                                                            <div className="tooltip tooltip-bottom" data-tip='hi my name is sajedul'>

                                                                <img src={user?.photoURL} alt='user pictur' />
                                                            </div>

                                                        </div>
                                                        :
                                                        <span className='flex items-center justify-center'> <FaUserGraduate /></span>
                                                }
                                            </div>
                                        </label>

                                        <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                                            <li><button onClick={handleLogOut}>Logout</button></li>
                                        </ul>
                                    </div>
                                    :
                                    <>
                                        <div className="flex-none">
                                            <ul className="gap-3 p-0 menu menu-horizontal">
                                                <li className='border hover:bg-[#6419E6] hover:text-white border-white rounded-full '>
                                                    <Link to='/login'>log in</Link>
                                                </li>
                                                <li className='bg-[#6419E6] rounded-full text-white'>
                                                    <Link to='/Register'>Register</Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </>
                            }
                            <div className="block dropdown dropdown-end sm:block md:block lg:hidden">
                                <label tabIndex={0} className="btn btn-ghost rounded-btn"><FaBars /></label>
                                <ul tabIndex={0} className="p-2 mt-4 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                                    <div className="flex-none">
                                        <ul className="p-0 menu menu-vertical">
                                            <li>
                                                <Link to='/'>Home</Link>
                                            </li>
                                            <li tabIndex={0}>
                                                <Link to='/courses'>Courses</Link>
                                            </li>
                                            <li>
                                                <Link to='/'>FAQ</Link>
                                            </li>
                                            <li>
                                                <Link to='/blog'>Blog</Link>
                                            </li>
                                            <label className="cursor-pointer label">

                                                <input type="checkbox" className="toggle" />
                                            </label>
                                        </ul>
                                    </div>
                                </ul>
                            </div>

                        </div>
                    </div >

            }

        </div>

    );
};

export default NavBar;