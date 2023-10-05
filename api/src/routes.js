const express = require('express');

const authController = require('./controllers/authController');
const carController = require('./controllers/carController');

const router = express.Router();

router.use('/auth', authController);
// router.use('*', (req, res) => {
//     res.status(404).render('404');
// });
router.use('/mobile/car', carController);

module.exports = router;