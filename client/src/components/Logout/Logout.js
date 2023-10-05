import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthContext();
    const { addNotification } = useNotificationContext();
    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                addNotification('Has cerrado sesión correctamente!', types.success);
                navigate('/')
            }).catch(err => {
                console.log(err.message);
                addNotification(err.message, types.error)
            })
    }, [logout, user.accessToken, navigate, addNotification]);

    return null;
}

export default Logout;