const express = require('express');
const router = express.Router();

const consultStudent = require('../../../controller/student/profile')


router.get('/consult/datalogin/:IDStudent', consultStudent.ConsultStudent)
router.put('/update/student', consultStudent.UpdateStudent)

router.get('/consult/datacurriculum/:IDStudent', consultStudent.ConsultCurriculumStudent)
router.put('/update/curriculum/student', consultStudent.UpdateCurriculumStudent)


module.exports = router