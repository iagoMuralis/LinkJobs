const express = require('express');
const router = express.Router();

const jobsCompany = require('../../controller/jobs/jobsCompany');
const jobsStudent = require('../../controller/jobs/jobsStundent')

router.post('/register', jobsCompany.RegisterJobs);
router.get('/company/consult/:IDCompany', jobsCompany.ConsultJobs);
router.delete('/company/delete/:IDJob', jobsCompany.DeleteJob);

router.get('/student/consult', jobsStudent.ConsultJobsStudent)

module.exports = router;