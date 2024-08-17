import React from 'react';
import { Link } from 'react-router-dom';
import { DASHBOARD } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} User Management. All rights reserved.
                </div>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <Link to={DASHBOARD} className="hover:underline">Dashboard</Link>
                    <Link to="/about" className="hover:underline">About</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
