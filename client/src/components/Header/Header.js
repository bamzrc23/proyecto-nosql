import { useAuthContext } from "../../contexts/AuthContext";
import LinkComponent from "../Common/LinkComponent/LinkComponent";

const Header = () => {
    const { user, isAdministrator, isAuthenticated } = useAuthContext();

    let guestNavigation = (
        <ul className="navbar-nav ml-auto">
            <LinkComponent href="/auth/login" title="Iniciar seción" type="nav" />
            <LinkComponent href="/auth/register" title="Registrate" type="nav" />
        </ul>
    )

    let userNavigation = (
        <ul className="navbar-nav ml-auto">
            <LinkComponent href="/mobile/car/mySavedTrips" title={`Bienvenido, ${user.name}`} type="nav" />
            <LinkComponent href="/auth/logout" title="Salir" type="nav" />
        </ul>
    )

    let administratorNavigation = (
        <ul className="navbar-nav ml-auto">
            <LinkComponent href="/mobile/car/allSavedTrips" title={`Bienvenido, ${user.name}`} type="nav" />
            <LinkComponent href="/mobile/car/create" title="Agregar un auto" type="nav" />
            <LinkComponent href="/auth/logout" title="Salir" type="nav" />
        </ul>
    )

    return (
        <nav className="navbar navbar-expand-lg ftco-navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">Renta<span>car</span></a>
                <div className=" navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <LinkComponent href="/" title="Inicio" type="nav" />
                        <LinkComponent href="/about" title="Acerca de" type="nav" />
                        <LinkComponent href="/contacts" title="Contactos" type="nav" />
                        <LinkComponent href="/mobile/car/all" title="Autos" type="nav" />
                    </ul>
                    {isAuthenticated ? (isAdministrator ? administratorNavigation : userNavigation) : guestNavigation}
                </div>
            </div>
        </nav >
    )
};

export default Header;