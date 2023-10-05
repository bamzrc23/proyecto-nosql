import React from "react";
import SectionComponent from "../Common/SectionComponent/SectionComponent";

const About = () => {
    return (
        <div>
            <SectionComponent backgroundImage="/images/image_1.jpg" title="Sobre nosotros" name="About" />

            <section className="ftco-section ftco-about">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: "url(images/about.jpg)" }}>
                        </div>
                        <div className="col-md-6 wrap-about ">
                            <div className="heading-section heading-section-white pl-md-5">
                                <span className="subheading">Sobre nosotros</span>
                                <h2 className="mb-4">Bienvenido a RentACar</h2>
                                <p>En RentACarHub, estamos dedicados a proporcionarte la mejor experiencia de alquiler de autos.</p>
                                <p>Nuestro compromiso es ofrecer a nuestros clientes un servicio de alquiler de vehículos de alta calidad y asequible que se adapte a todas sus necesidades de movilidad.</p>
                                <p><a href="/#" className="btn btn-primary py-3 px-4">Buscar vehículo</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;