const pool = require('./../../../database')

async function  RegisterConfirmedJob(req, res) {

    const {idCompany, idJob, titleJob, IDStudent, nameStudent} = req.body;

    try {
        
        const existingUser = await pool.query(
            'SELECT * FROM confirmed_job WHERE idcompany = $1 AND idjob = $2 AND namejob = $3 AND idstudent = $4 AND namestudent = $5',
            [idCompany, idJob, titleJob, IDStudent, nameStudent]
        );

        if (existingUser.rows.length > 0) {
            return res.status(201).json({ log: 'ja cadastrado no banco de dados' });
        }



        const result = await pool.query(
            'INSERT INTO confirmed_job (idcompany, idjob, namejob, idstudent, namestudent) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [idCompany, idJob, titleJob, IDStudent, nameStudent]
        );

        res.status(201).json(result.rows[0]);
        console.log('candidato cadastrado com sucesso')

    } catch (error) {
        console.error('erro ao cadastrar candidato a vaga escolhida');
        res.status(500).json({ error: 'erro no servidor' })
    }

}



async function ConsultConfirmedJobs(req, res) {

    const { IDCompany } = req.params;
    console.log( IDCompany)

    try {

        const result = await pool.query(
            'SELECT * FROM confirmed_job WHERE idcompany = $1 ',
            [IDCompany]
        );

        res.status(201).json(result.rows);
        console.log('candidatos das vagas divulgadas consultada')
       
    } catch (error) {
        console.error('erro ao consulta candidato de vagas cadastrada da empresa');
        res.status(500).json({ error: 'erro no servidor' })
    }

}


async function DeleteConfirmedJob (req, res){

    const {IDCandidate} = req.params;

    try{
        const result = await pool.query(
            ' DELETE FROM confirmed_job WHERE id = $1',
            [IDCandidate]
            );
            res.status(201).json(result.rows);
            console.log('candidato excluido')
    }catch(error){
        console.error('erro ao excluir candidato', error)
        res.status(500).json({error: 'erro no servidor'})
    }
}



module.exports = {
    RegisterConfirmedJob,
    ConsultConfirmedJobs,
    DeleteConfirmedJob
}
