const express = require('express')
const app = express()

const routerCompany = require('./modules/routes/company')
const routerStudent = require('./modules/routes/student/login')

const routerJobs = require('./modules/routes/jobs')

const routerProfileStudent = require('./modules/routes/student/profile')

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/company', routerCompany)
app.use('/student', routerStudent)

app.use('/jobs', routerJobs);


app.use('/profile', routerProfileStudent)

app.use((req, res, next) => {
    res.status(404).json({ message: 'Rota não encontrada' });
});

app.listen(3001, () => {
    console.log('servidor rodando na porta 3001')
})