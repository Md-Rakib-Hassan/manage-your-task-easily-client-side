import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <div className='flex'>
            <Sidebar><Outlet></Outlet></Sidebar>
            
        </div>
    );
};

export default Dashboard;