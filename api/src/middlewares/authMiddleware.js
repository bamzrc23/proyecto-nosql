const { JWT_SECRET } = require('../config/constants');
const jwt = require('jsonwebtoken');
// const jwt = require('../utils/jwt');
const User = require('../models/User');


exports.auth = function (req, res, next) {
    const token = req.get('X-Authorization')

    if (!token) {
        return res.status(401).send({
            message: "Missing Authorization header"
        });
    }

    // const token = authHeader.split(' ')[1];
    // console.log("Token", token)
    function verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, JWT_SECRET, (err, data) => {
                if (err) { reject(err); return; }
                resolve(data);
            });
        });
    }
    try {
        verifyToken(token).then(data => {
            User.findById(data._id)
                .then((user) => {
                    req.user = user;

                    next();
                }).catch(err => {
                    next(err);
                });
        });
    } catch (error) {
        return res.status(401).send({
            message: "You are not allowed to do this"
        })
    }

    // let token = req.headers['x-authorization'];
    // console.log(token)
    // if (token) {
    //     console.log(token)
    //     let decodedToken = jwt.verify(token, JWT_SECRET)
    //     if (decodedToken) {
    //         req.user = decodedToken;
    //         next();
    //     } else {
    //         res.status(401).json('sdfsdfsdf');
    //     }
    // } else {
    //     next();
    // }
};

// exports.isAuth = function (req, res, next) {
//     if (req.user) {
//         next();
//     } else {
//         res.status(401).json({ message: 'You are not authorized' });
//     }
// }

// exports.isGuest = function (req, res, next) {
//     if (!req.user) {
//         next();
//     } else {
//         res.status(401).json({ message: 'You authorized Guest' });
//     }
// }