import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import MobileSideBar from './MobileSideBar';

const Navbar: React.FC = () => {
    const { isAuthenticated, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                closeMenu();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                
                <div className="text-white text-xl font-bold">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500" : ""}>
                        User Management
                    </NavLink>
                </div>
                <div className="hidden md:flex space-x-4">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => isActive ? "text-orange-500" : "text-white hover:underline"}
                    >
                        Dashboard
                    </NavLink>
                    {isAuthenticated ? (
                        <button
                            onClick={logout}
                            className="text-white hover:underline"
                        >
                            Sign Out
                        </button>
                    ) : (
                        <>
                            <NavLink
                                to="/signin"
                                className={({ isActive }) => isActive ? "text-orange-500" : "text-white hover:underline"}
                            >
                                Sign In
                            </NavLink>
                            <NavLink
                                to="/signup"
                                className={({ isActive }) => isActive ? "text-orange-500" : "text-white hover:underline"}
                            >
                                Sign Up
                            </NavLink>
                        </>
                    )}
                </div>

                {/* ------------------------------------ Mobile Menu Button ------------------------------------------- */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>

            <MobileSideBar closeMenu={closeMenu} isMenuOpen={isMenuOpen} />
        </nav>
    );
};

export default Navbar;
