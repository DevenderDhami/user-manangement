import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { AuthService } from '../services/authService';

// Define the type for user data returned from the API
interface UserData {
    email: string;
    first_name: string;
    last_name: string;
}

const Dashboard: React.FC = () => {
    const { user, token } = useAuth();
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    console.log("useree", user)
    useEffect(() => {
        const fetchUserData = async () => {
            if (user && token) {
                try {
                    const response = await AuthService.getUser(1); // Adjust user Id
                    setUserData(response.data);
                } catch (error) {
                    setError('Failed to fetch user data');
                    console.error('Failed to fetch user data', error);
                } finally {
                    setLoading(false);
                }
            } else {
                setError('No user data available');
                setLoading(false);
            }
        };

        fetchUserData();
    }, [user, token]);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-center"> Dashboard</h1>
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-semibold mb-2">User Information</h2>
                {userData ? (
                    <div>
                        <p><strong>Name:</strong> {userData.first_name} {userData.last_name}</p>
                        <p><strong>Email:</strong> {userData.email}</p>
                        <p><strong>Token:</strong> {token}</p>
                    </div>
                ) : (
                    <p>No user data available</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
