const express = require('express');
const router = express.Router();

const registerCompany = require('../../controller/company/login')
const loginCompany = require('../../controller/company/login')



router.post('/register', registerCompany.RegisterCompany)
router.post('/login', loginCompany.AuthenticationCompany);

module.exports = router