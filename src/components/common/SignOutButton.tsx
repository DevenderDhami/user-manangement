import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { LOGIN } from '../constants';

const SignOutButton: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate(LOGIN);
  };

  return (
    <button onClick={handleSignOut} className="bg-red-500 text-white p-2 rounded">
      Sign Out
    </button>
  );
};

export default SignOutButton;
