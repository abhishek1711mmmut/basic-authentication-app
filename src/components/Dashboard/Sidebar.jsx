import React from 'react'
import { NavLink, matchPath, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { logout } from '../../services/operations/authAPI';

const Sidebar = () => {
    const { setToken, setUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();  // gives the current URL
    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname);
    }

    return (
        <div className='flex flex-col items-start min-w-[220px] border-r-2 border-r-gray-500 h-[100vh] bg-violet-200'>
            <NavLink to='/dashboard/my-images'>
                <div className={`${matchRoute('/dashboard/my-images')} ? 'bg-violet-700' : 'bg-violet-400'`}>
                    My Image
                </div>
            </NavLink>
            <NavLink to='/dashboard/upload-image'>
                <div className={`${matchRoute('/dashboard/upload-image')} ? (bg-violet-700) : (bg-violet-400)`}>
                    Upload Image
                </div>
            </NavLink>
            <button onClick={() => logout(navigate, setToken, setUser)} className='text-red-500'>
                logout
            </button>
        </div>
    )
}

export default Sidebar