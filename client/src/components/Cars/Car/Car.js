import React from "react";
import { Link } from "react-router-dom";

const Car = ({
    car
}) => {
    const carDataForAll = (
        <>
            <div className="d-flex mb-3">
                <span className="cat">{car.type}</span>
                <p className="price ml-auto">{car.price}$<span>/dia</span></p>
            </div>
            <p className="d-flex mb-0 d-block">
                <Link to={`/mobile/car/${car._id}/addTenant`} className="btn btn-primary py-2 mr-1">Reservar ahora</Link>
                <Link to={`/mobile/car/${car._id}`} className="btn btn-secondary py-2 ml-1">Detalles</Link>
            </p>
        </>
    )

    const carDataForMe = (
        <>
            <div className="d-flex mb-3">
                <p className="price ml-auto">{car.savedDays} <span>/dias guardados</span></p>
            </div>
            <div className="d-flex mb-3">
                <p className="price ml-auto">{car.price}$ <span>/dia</span></p>
                <p className="price ml-auto">{car.fullPrice}$ <span>/precio final</span></p>
            </div>
            <div className="d-flex mb-3">
                <p className="price ml-auto">De: {car.pickUpLocation} </p>
                <p className="price ml-auto">  {car.dateFrom}</p>
            </div>
            <div className="d-flex mb-3">
                <p className="price ml-auto">A: {car.dropOffLocation} </p>
                <p className="price ml-auto">{car.dateTo}</p>
            </div>
            <p className="d-flex mb-0 d-block">
                <Link to={`/mobile/car/${car._id}`} className="btn btn-secondary py-2 ml-1">Detalles</Link>
            </p>
        </>
    )
    return (
        <div className="col-md-4">
            <div className="car-wrap rounded">
                <div className="img rounded d-flex align-items-end">
                    <img className="img rounded d-flex align-items-end" src={car.image} alt="imageUrl" />
                </div>
                <div className="text">
                    <h2 className="mb-0"><Link to={`/details/${car._id}`}>{car.make} {car.model}</Link></h2>
                    {car.doors ? carDataForAll : carDataForMe}
                </div>
            </div>
        </div>
    );
}

export default Car;