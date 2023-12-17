const express = require('express');
const router = express.Router();

const registerCurriculumStudent = require('./../../../controller/student/curriculum')
const setStateCurriculumStudent = require('../../../controller/student/curriculum')

router.post('/register/student', registerCurriculumStudent.RegisterCurriculumStudent)
router.put('/setcurriculum/student/:IDStudent', setStateCurriculumStudent.SetStateCurriculumStudent)


module.exports = router