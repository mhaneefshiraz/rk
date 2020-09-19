
var express = require('express');
var router = express.Router();
const auth = require('../controller/auth.controller')

/* user validation. */
router.post('/authenticate', auth.authenticate);

/* generate password. */
router.post('/generatePassword',auth.generatePassword)


module.exports = router;
