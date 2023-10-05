const { jwtSign } = require('../utils/jwt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { JWT_SECRET } = require('../config/constants');

exports.register = ({ name, email, password, rePassword }) => {
    if (password !== rePassword) {
        throw { message: 'Las contraseñas deben ser iguales' }
    }

    return User.create({ name, email, password });
};

exports.login = async ({ email, password }) => {
    let user = await User.findByEmail(email);
    if (!user) {
        throw { message: 'Correo electrónico o contraseña no válidos!' }
    }

    let isValid = await user.validatePassword(password);

    if (!isValid) {
        throw { message: 'Correo electrónico o contraseña no válidos!' }
    }

    let payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
    }

    let accessToken = jwt.sign(payload, JWT_SECRET);
    // , { expiresIn: '1h' }
    return { user, accessToken };
}

exports.createToken = function (user) {
    let payload = {
        _id: user._id,
        name: user.name,
        email: user.email,
    }

    return jwtSign(payload, JWT_SECRET);
};
