import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <div className='flex relative' >
            <Sidebar />
            <div className='flex-1 overflow-auto'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard