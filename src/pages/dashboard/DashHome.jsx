import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Profile from '../../components/Profile';
import Todo from '../../components/Todo';

const DashHome = () => {
    
    return (
        <div>
           <Profile></Profile>
           <Todo></Todo>
        </div>
    );
};

export default DashHome;