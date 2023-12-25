import React from 'react';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
const Sidebar = ({children}) => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col relative">
    {children}
    <label htmlFor="my-drawer-2" className="btn drawer-button absolute top-2 left-2 lg:hidden"><CiMenuBurger /></label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
    
      <li><Link to={'/dashboard'}>Home</Link></li>
      <li><Link to={'/'}>Back</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Sidebar;