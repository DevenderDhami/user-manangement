import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="bg-gray-50 flex-grow">
                <main className=" container mx-auto">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default AppLayout;
