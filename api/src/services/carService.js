const Car = require("../models/Car");

exports.getAll = () => Car.find().sort({ createdAt: 'desc' });

exports.getAvailable = async (data) => {
    const from = data.dateFrom;
    const to = data.dateTo;
    const dateNow = new Date(Date.now()).toJSON().slice(0, 10);

    if (!isValidDate(from)) {
        throw { message: 'La fecha debe estar en este formato 2021-12-30 (año-mes-día)!' }
    }

    if (!isValidDate(to)) {
        throw { message: 'La fecha debe estar en este formato 2021-12-30 (año-mes-día)!' }
    }

    if (from < dateNow) {
        throw { message: 'La fecha de recogida debe ser igual o mayor que la fecha de hoy' }
    }

    if (from > to) {
        throw { message: 'La fecha de recogida debe ser igual o menor que la fecha de entrega' }
    }

    const cars = await this.getAll();
    const result = [];
    cars.forEach(car => {
        if (car.tenants) {
            try {
                car.tenants.forEach(savedDate => {
                    const dateFrom = new Date(savedDate.dateFrom).toJSON().slice(0, 10);
                    const dateTo = new Date(savedDate.dateTo).toJSON().slice(0, 10);
                    if ((from >= dateFrom && from <= dateTo)
                        || (to >= dateFrom && to <= dateTo)
                        || (to >= dateTo && from <= dateTo)
                        || (from <= dateFrom && to >= dateFrom)) {
                        throw { message: `${car.make} no está disponible para esta fecha` }
                    }
                });
                result.push(car);
            } catch (error) {
                console.log(error.message)
            }
        }
    });

    return result;
}

exports.allSavedTrips = async () => {
    const cars = await this.getAll();

    const result = [];
    cars.map(car => {
        car.tenants.map(t => {
            const dateFrom = t.dateFrom.toJSON().slice(0, 10);
            const dateTo = t.dateTo.toJSON().slice(0, 10);
            const diffDays = Math.ceil((Math.abs(t.dateFrom - t.dateTo)) / (1000 * 60 * 60 * 24));
            const savedDays = diffDays + 1;
            const fullPrice = savedDays * car.price;
            result.push({ _id: car._id, image: car.image, price: car.price, savedDays, fullPrice, tripId: t._id, pickUpLocation: t.pickUpLocation, dropOffLocation: t.dropOffLocation, model: car.model, make: car.make, dateFrom, dateTo });
        });
    });

    return result;
}

exports.mySavedTrips = async (userId) => {
    const cars = await this.getAll();

    const result = [];
    cars.map(car => {
        car.tenants.map(t => {
            if (t.tenantId.toJSON() == userId.toJSON()) {
                const dateFrom = t.dateFrom.toJSON().slice(0, 10);
                const dateTo = t.dateTo.toJSON().slice(0, 10);
                const diffDays = Math.ceil((Math.abs(t.dateFrom - t.dateTo)) / (1000 * 60 * 60 * 24));
                const savedDays = diffDays + 1;
                const fullPrice = savedDays * car.price;
                result.push({ _id: car._id, image: car.image, savedDays, fullPrice, price: car.price, pickUpLocation: t.pickUpLocation, dropOffLocation: t.dropOffLocation, model: car.model, make: car.make, dateFrom, dateTo });
            }
        });
    });

    // const filtredCars = cars.filter(car => car.tenants.find(t => t.tenantId.toJSON() == userId.toJSON()));

    return result;
}

exports.getOne = (id) => Car.findById(id);

exports.update = (id, carData) => Car.findByIdAndUpdate(id, carData);

exports.delete = (id) => Car.findByIdAndDelete(id);

exports.create = (carData) => Car.create(carData);

exports.likes = async (carId, userId) => {
    const car = await this.getOne(carId);

    if (car.creator.toJSON() === userId.toJSON()) {
        throw { message: 'no puedes calificar tu propio auto' }
    }

    if (car.likes.find(user => user._id.toJSON() === userId.toJSON())) {
        throw { message: 'ya te gustó este auto' }
    }

    car.likes.push(userId);

    return car.save();
}

exports.addTenant = async (carId, userId, data) => {
    const car = await this.getOne(carId);
    const from = data.dateFrom;
    const to = data.dateTo;
    const pickUpLocation = data.pickUpLocation;
    const dropOffLocation = data.dropOffLocation;
    const dateNow = new Date(Date.now()).toJSON().slice(0, 10);

    if (!isValidDate(from)) {
        throw { message: 'La fecha debe estar en este formato 2021-12-30 (año-mes-día)!' }
    }

    if (!isValidDate(to)) {
        throw { message: 'La fecha debe estar en este formato 2021-12-30 (año-mes-día)!' }
    }

    if (from < dateNow) {
        throw { message: 'La fecha de recogida debe ser igual o mayor que la fecha de hoy' }
    }

    if (from > to) {
        throw { message: 'La fecha de recogida debe ser igual o menor que la fecha de entrega' }
    }

    if (car.tenants) {
        car.tenants.forEach(savedDate => {
            const dateFrom = new Date(savedDate.dateFrom).toJSON().slice(0, 10);
            const dateTo = new Date(savedDate.dateTo).toJSON().slice(0, 10);

            if ((from >= dateFrom && from <= dateTo)
                || (to >= dateFrom && to <= dateTo)
                || (to >= dateTo && from <= dateTo)
                || (from <= dateFrom && to >= dateFrom)) {
                throw { message: `Estas fechas: Desde ${dateFrom} a ${dateTo} ya estan alquilados! Cambiar las fechas o el auto ${car.make} por favor` }
            }
        });
    }

    const newTenant = {
        tenantId: userId,
        dateFrom: from,
        dateTo: to,
        pickUpLocation,
        dropOffLocation
    }

    car.tenants.push(newTenant);

    return car.save();
}

exports.deleteTrip = async (carId, tripId) => {
    const car = await this.getOne(carId);

    const carTenants = await car.tenants.filter(t => t._id.toJSON() !== tripId);
    car.tenants = [];
    carTenants.map(tenant => {
        car.tenants.push(tenant)
    });
    return car.save();
}

function isValidDate(value) {
    if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) {
        return false;
    }

    const date = new Date(value);
    if (!date.getTime()) return false;
    return date.toISOString().slice(0, 10) === value;
}