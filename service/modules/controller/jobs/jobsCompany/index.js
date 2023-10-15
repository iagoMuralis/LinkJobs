const pool = require('../../../../database')

async function RegisterJobs(req, res) {

    const { IDCompany, nameCompany, nameJob, locationJob, descriptionJob, dayJob } = req.body;

    try {

        const result = await pool.query(
            'INSERT INTO jobs (IDCompany , nameCompany, nameJob, locationJob, descriptionJob, date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [IDCompany, nameCompany, nameJob, locationJob, descriptionJob, dayJob]
        );

        res.status(201).json(result.rows[0]);
        console.log('vaga cadastrada com sucesso')

    } catch (error) {
        console.error('erro ao cadastrar vaga');
        res.status(500).json({ error: 'erro no servidor' })
    }

}

async function ConsultJobs(req, res) {

    const { IDCompany } = req.params;

    try {

        const result = await pool.query(
            'SELECT * FROM jobs WHERE IDCompany = $1 ',
            [IDCompany]
        );

        res.status(201).json(result.rows);
        console.log('vaga da empresa consultada')
       
    } catch (error) {
        console.error('erro ao consulta vaga cadastrada da empresa');
        res.status(500).json({ error: 'erro no servidor' })
    }

}

async function DeleteJob(req, res) {

    const { IDJob } = req.params;

    try {

        const result = await pool.query(
            'DELETE FROM jobs WHERE id = $1 ',
            [IDJob]
        );

        res.status(201).json(result.rows);
        console.log('vaga da empresa consultada')
       
    } catch (error) {
        console.error('erro ao consulta vaga cadastrada da empresa');
        res.status(500).json({ error: 'erro no servidor' })
    }

}


module.exports = {
    RegisterJobs,
    ConsultJobs,
    DeleteJob,
}