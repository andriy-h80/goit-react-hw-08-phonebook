import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const RestrictedRoute = ({ component: Component, navigateTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={navigateTo} /> : Component;
};