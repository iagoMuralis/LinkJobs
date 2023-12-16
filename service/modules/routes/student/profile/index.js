const express = require('express');
const router = express.Router();

const consultStudent = require('../../../controller/student/profile')


router.get('/consult/datalogin/:IDStudent', consultStudent.ConsultStudent)
router.put('/update/student', consultStudent.UpdateStudent)


module.exports = router