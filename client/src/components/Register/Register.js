import { useNavigate } from "react-router";

import { useAuthContext } from "../../contexts/AuthContext";
import { useNotificationContext, types } from "../../contexts/NotificationContext";
import * as authService from '../../services/authService';
import InputFormComponent from "../Common/InputFormComponent/InputFormComponent";
import AuthValidations from "../Common/Validations/AuthValidations";

const Register = () => {
    const { login } = useAuthContext();
    const { addNotification } = useNotificationContext();
    const navigate = useNavigate();
    const {
        nameChangeHandler,
        emailChangeHandler,
        passwordChangeHandler,
        rePasswordChangeHandler,
        errors
    } = AuthValidations();

    const onRegisterHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let email = formData.get('email');
        let password = formData.get('password');
        let rePassword = formData.get('rePassword');

        authService.register({ name, email, password, rePassword })
            .then((authData) => {
                login(authData);
                addNotification('Te registraste e iniciaste sesión exitosamente!', types.success);
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
                    <form className="request-form bg-primary" onSubmit={onRegisterHandler} method="POST">
                        <h2>Registra tu cuenta</h2>
                        <InputFormComponent
                            form="form-group"
                            title="Nombre"
                            type="text"
                            name="name"
                            placeholder="Bryan Matailo"
                            onBlur={nameChangeHandler}
                            errors={errors.name}
                        />
                        <InputFormComponent
                            form="form-group"
                            title="Correo electronico"
                            type="text"
                            name="email"
                            placeholder="ejemplo@abc.com"
                            onBlur={emailChangeHandler}
                            errors={errors.email}
                        />
                        <div className="d-flex">
                            <InputFormComponent
                                form="form-group mr-2"
                                title="Contraseña"
                                type="password"
                                name="password"
                                placeholder="contraseña"
                                onBlur={passwordChangeHandler}
                                errors={errors.password}
                            />
                            <InputFormComponent
                                form="form-group ml-2"
                                title="Repita la contraseña"
                                type="password"
                                name="rePassword"
                                placeholder="repita contraseña"
                                onBlur={rePasswordChangeHandler}
                                errors={errors.rePassword}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Registre su cuenta ahora" className="btn btn-secondary py-3 px-4" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;