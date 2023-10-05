import LinkComponent from "../Common/LinkComponent/LinkComponent";

const Footer = () => {
    return (
        <footer className="ftco-footer ftco-bg-dark ftco-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2"><a href="/" className="logo">Renta<span>Car</span></a></h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-5">
                            <h2 className="ftco-heading-2">Información</h2>
                            <ul className="list-unstyled">
                                <LinkComponent href="/" title="Inicio" type="nav" />
                                <LinkComponent href="/about" title="Acerca de" type="nav" />
                                <LinkComponent href="#" title="Servicios" type="nav" />
                                <LinkComponent href="#" title="Términos y Condiciones" type="nav" />
                                <LinkComponent href="#" title="Privacidad &amp; Política de cookies" type="nav" />
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Atención al cliente</h2>
                            <ul className="list-unstyled">
                                <LinkComponent href="#" title="FAQ" type="nav" />
                                <LinkComponent href="#" title="Opcion de pago" type="nav" />
                                <LinkComponent href="#" title="Booking Tips" type="nav" />
                                <LinkComponent href="#" title="How it works" type="nav" />
                                <LinkComponent href="#" title="Contact Us" type="nav" />
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">¿Tienes alguna pregunta?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <LinkComponent href="#" title="Av 25 de junio, calle 15 oeste" type="nav" />
                                    <LinkComponent href="#" title="593 983 44 79 06" type="nav" />
                                    <LinkComponent href="#" title="matailo68@gmail.com" type="nav" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;