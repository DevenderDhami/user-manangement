import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { DASHBOARD, LOGIN, REGISTER } from '../constants';

const MobileSideBar = ({ closeMenu, isMenuOpen }: { closeMenu: any, isMenuOpen: any }) => {
    const { isAuthenticated, logout } = useAuth();

    return (
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}
        >
            <button
                onClick={closeMenu}
                className="absolute top-4 right-4 text-white focus:outline-none"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <div className="text-white text-xl font-bold pt-5 px-4">
                <NavLink
                    to={DASHBOARD}
                    className={({ isActive }) => isActive ? "text-red-500" : ""}
                    onClick={closeMenu}
                >
                    User Management
                </NavLink>
            </div>
            <div className="p-4 pt-10 space-y-3">
                <NavLink
                    to={DASHBOARD}
                    className={({ isActive }) => isActive ? "text-red-500 block text-xl hover:underline" : "block text-xl hover:underline"}
                    onClick={closeMenu}
                >
                    Dashboard
                </NavLink>
                {isAuthenticated ? (
                    <button
                        onClick={() => { logout(); closeMenu(); }}
                        className="block text-xl hover:underline"
                    >
                        Sign Out
                    </button>
                ) : (
                    <>
                        <NavLink
                            to={LOGIN}
                            className={({ isActive }) => isActive ? "text-red-500 block text-xl hover:underline" : "block text-xl hover:underline"}
                            onClick={closeMenu}
                        >
                            Sign In
                        </NavLink>
                        <NavLink
                            to={REGISTER}
                            className={({ isActive }) => isActive ? "text-red-500 block text-xl hover:underline" : "block text-xl hover:underline"}
                            onClick={closeMenu}
                        >
                            Sign Up
                        </NavLink>
                    </>
                )}
            </div>
        </div>
    )
}

export default MobileSideBar;
