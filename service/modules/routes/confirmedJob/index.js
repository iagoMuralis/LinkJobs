const express = require('express');
const router = express.Router();

const confirmedJob = require('./../../controller/confirmedJob')

router.get('/consult/jobs/student/:IDCompany', confirmedJob.ConsultConfirmedJobs)

router.post('/register/jobs/student', confirmedJob.RegisterConfirmedJob)

router.delete('/delete/jobs/student/:IDCandidate', confirmedJob.DeleteConfirmedJob)



module.exports = router