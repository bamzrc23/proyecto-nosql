import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';

const NotPrivedRoute = () => {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Navigate to="/" /> : <Outlet />
}

export default NotPrivedRoute;