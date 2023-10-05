import React from "react";

const CarDetailsComponent = ({ title, detail, icon }) => {
    return (
        <div className="col-md d-flex align-self-stretch ">
            <div className="media block-6 services">
                <div className="media-body py-md-4">
                    <div className="d-flex mb-3 align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                            <span>{icon}</span>
                        </div>
                        <div className="text">
                            <h3 className="heading mb-0 pl-3">
                                {title}
                                <span>{detail}</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetailsComponent;