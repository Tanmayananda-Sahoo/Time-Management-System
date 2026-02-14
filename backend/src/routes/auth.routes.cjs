const express = require('express');
const {login, register} = require('../controllers/auth.controllers.cjs');

const router = express.Router();

router.route('/login').post(login);
router.route('/register').post(register);

module.exports = router;