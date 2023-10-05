import React from "react";
import SectionComponent from "../Common/SectionComponent/SectionComponent";

const Contacts = () => {
    return (
        <div>
            <SectionComponent backgroundImage="/images/bg_3.jpg" name="Contact" title="Contacta con nosotros" />

            <section className="ftco-section contact-section">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="col-md-7">
                            <div className="row mb-7">
                                <div className="col-md-12">
                                    <div className="border w-100 p-4 rounded mb-2 d-flex">
                                        <div className="icon mr-3">
                                            <span className="icon-map-o"></span>
                                        </div>
                                        <p><span>Dirección:</span> Av 25 de junio, calle 15 oeste</p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="border w-100 p-4 rounded mb-2 d-flex">
                                        <div className="icon mr-3">
                                            <span className="icon-mobile-phone"></span>
                                        </div>
                                        <p><span>Telefono:</span> +593 983 44 79 06</p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="border w-100 p-4 rounded mb-2 d-flex">
                                        <div className="icon mr-3">
                                            <span className="icon-envelope-o"></span>
                                        </div>
                                        <p><span>Email:</span> matailo68@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contacts;