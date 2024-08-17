import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LOGIN, REGISTER } from '../constants';
import SignIn from '../../pages/SignIn';
import ProtectedRoute from './ProtectedRoute';
import DashBoard from '../../pages/DashBoard';
import SignUp from '../../pages/SignUp';
import Error404 from '../../pages/Error404';

const AllRoutes: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={LOGIN} element={<SignIn />} />
                <Route path={REGISTER} element={<SignUp />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <DashBoard />
                        </ProtectedRoute>
                    }
                />
                <Route path="/" element={<SignIn />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </>
    );
};

export default AllRoutes;
