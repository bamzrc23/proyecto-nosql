import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext';

const AdminGuardedRoute = () => {
    const { isAuthenticated, isAdministrator } = useAuthContext();

    return isAuthenticated ? (isAdministrator ? <Outlet /> : <Navigate to="/" />) : <Navigate to="/auth/login" />
}

export default AdminGuardedRoute;