import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
    const context = useContext(AuthContext);
    const { user, logOut } = context;
    return (
        <div>
            <div className="dropdown dropdown-end flex items-center justify-end p-4">
                                     <div>
                                     {user.displayName}
                                     </div>
                                     <div>
                                     <label tabIndex={10} className="btn btn-ghost btn-circle avatar">
                                        
                                        <div className="w-12 h-12 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </label>
                                    <ul tabIndex={10} className="mt-3 z-[1000] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52 ">
                                        <li><Link to={'/'}><button >Main Home</button></Link></li>
                                        <li><button onClick={logOut}>Logout</button></li>
                                    </ul>
                                     </div>
                                    
                                </div>
        </div>
    );
};

export default Profile;