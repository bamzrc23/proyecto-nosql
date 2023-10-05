import { useNavigate } from "react-router";

import { useAuthContext } from "../../contexts/AuthContext";
import { useNotificationContext, types } from "../../contexts/NotificationContext";
import * as authService from '../../services/authService';
import InputFormComponent from "../Common/InputFormComponent/InputFormComponent";

const Login = () => {
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login({email, password})
            .then((authData) => {
                login(authData);
                addNotification('Has iniciado sesión correctamente!', types.success);
                navigate('/mobile/car/all');
            })
            .catch(err => {
                console.log(err);
                addNotification(err.message, types.error)
            })
    }
    return (
        <div className="hero-wrap" style={{ backgroundImage: "url(/images/fondo1.jpg)" }} data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="overlay"></div>
                <div className="row no-gutters slider-text align-items-center">
                    <form className="request-form bg-primary" onSubmit={onLoginHandler} method="POST">
                        <h2>Iniciar seción</h2>
                        <InputFormComponent
                            form="form-group"
                            title="Correo electronico"
                            type="text"
                            name="email"
                            placeholder="ejemplo@abc.com"
                        />
                        <InputFormComponent
                            form="form-group mr-2"
                            title="Contraseña"
                            type="password"
                            name="password"
                            placeholder="contraseña"
                        />
                        <div className="form-group">
                            <input type="submit" value="Iniciar seción" className="btn btn-secondary py-3 px-4" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;