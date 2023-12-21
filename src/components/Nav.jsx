import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Nav = () => {
    const context = useContext(AuthContext);
    const { user, logOut } = context;

    return (
        <div>
            <nav className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold md:inline hidden">Task Manager</div>
                    <div className="flex space-x-4 items-center">
                        <NavLink to="/" className="hover:text-gray-300 transition duration-300">Home</NavLink>
                        <NavLink to="/contact" className="hover:text-gray-300 transition duration-300">Contact</NavLink>
                        <NavLink to="/about-us" className="hover:text-gray-300 transition duration-300">About Us</NavLink>
                        {
                            user ? <>
                                <div className="dropdown dropdown-end  ">
                                    <label tabIndex={10} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-12 h-12 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex={10} className="mt-3 z-[1000] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52 bg-gray-700">
                                        <li><Link to={'/dashboard'}><button >Dashboard</button></Link></li>
                                        <li><button onClick={logOut}>Logout</button></li>
                                    </ul>
                                </div>
                            </> : ''
                        }

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;