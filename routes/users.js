const express = require('express');
const router = express.Router();

const UsersControllers = require('../controllers/users.js');

router.get('/', UsersControllers.getAllUsers);


module.exports = router;
