const express = require('express');
const router = express.Router();

const registerStudent = require('../../../controller/student/login')
const loginStudent = require('../../../controller/student/login')



router.post('/register', registerStudent.RegisterStudent)
router.post('/login', loginStudent.AuthenticationStudent)

module.exports = router