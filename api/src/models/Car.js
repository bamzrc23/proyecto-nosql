const mongoose = require('mongoose');
const validator = require('validator');
mongoose.set('runValidators', true)

const carSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
        minlength: 2,
    },
    model: {
        type: String,
        required: true,
        minlength: 1,
    },
    type: {
        type: String,
        enum: ['Suv', 'Sedan', 'Coupe', 'Hatchback', 'Combi', 'Limousine', 'Off-road'],
        required: true,
    },
    image: {
        type: String,
        required: true,
        validate: validator.isURL,
    },
    fuel: {
        type: String,
        enum: ['Gasoline', 'Diesel', 'Hybrid', 'Electric', 'Legs'],
        required: true,
    },
    transmission: {
        type: String,
        enum: ['Manual', 'Automat'],
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 300,
    },
    mileage: {
        type: Number,
        required: true,
        min: 1,
        max: 1000000
    },
    price: {
        type: Number,
        required: true,
        min: 1,
        max: 1000
    },
    seats: {
        type: Number,
        required: true,
        min: 1,
        max: 9,
    },
    doors: {
        type: Number,
        required: true,
        min: 2,
        max: 5,
    },
    luggage: {
        type: Number,
        required: true,
        min: 0,
        max: 6,
    },
    year: {
        type: Number,
        required: true,
        min: 1930,
        max: 2021,
    },
    childSeat: {
        type: Boolean,
        default: false
    },
    gps: {
        type: Boolean,
        default: false
    },
    music: {
        type: Boolean,
        default: false
    },
    bluetooth: {
        type: Boolean,
        default: false
    },
    onboardComputer: {
        type: Boolean,
        default: false
    },
    audioInput: {
        type: Boolean,
        default: false
    },
    remoteCentralLocking: {
        type: Boolean,
        default: false
    },
    airConditioner: {
        type: Boolean,
        default: false
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    likes: [
        {
            userId: {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            }
        }
    ],
    tenants: [
        {
            tenantId: {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            },
            dateFrom: {
                type: Date,
                required: true,
            },
            dateTo: {
                type: Date,
                required: true,
            },
            pickUpLocation: {
                type: String,
                enum: ['Central', 'sucursal 1', 'sucursal 2', 'sucursal 3'],
                required: true,
            },
            dropOffLocation: {
                type: String,
                enum: ['Central', 'sucursal 1', 'sucursal 2', 'sucursal 3'],
                required: true,
            }
        }
    ]
}, {
    timestamps: true
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;