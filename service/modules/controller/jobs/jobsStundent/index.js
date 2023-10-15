const pool = require('../../../../database')



async function ConsultJobsStudent(req, res) {
    try {

        const result = await pool.query(
            'SELECT * FROM jobs ',
        );

        res.status(201).json(result.rows);
        console.log('vaga disponiveis para estudante  consultada')
       
    } catch (error) {
        console.error('erro ao consulta vaga cadastrada da empresa');
        res.status(500).json({ error: 'erro no servidor' })
    }

}

module.exports = {
    ConsultJobsStudent,
}










