const express = require('express');
const router = express.Router();

const curriculum = require('./../../../controller/student/curriculum')

router.post('/register/student', curriculum.RegisterCurriculumStudent)
router.put('/setcurriculum/student/:IDStudent', curriculum.SetStateCurriculumStudent)
router.get('/consult/student/:IDStudent',curriculum.ConsultCurriculumStudent )


module.exports = router