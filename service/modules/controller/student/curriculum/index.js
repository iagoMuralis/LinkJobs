const pool = require('../../../../database')

async function RegisterCurriculumStudent(req, res){

    const {IDStudent, city, course, semester, telephone, portfolio} = req.body;

    try{
        const result = await pool.query(
            'INSERT INTO curriculum_student (idstudent, city, course, semester, telephone, portfolio) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [IDStudent, city, course, semester, telephone, portfolio]
        )
        res.status(201).json(result.rows[0]);
        console.log('curriculo cadastrada com sucesso')
        
    }catch (error) {
        console.error('Erro ao cadastrar currículo:', error);
        res.status(500).json({ error: 'erro no servidor' })
    }
}

async function SetStateCurriculumStudent(req, res){

    const {IDStudent} = req.params;

    try{
        const result = await pool.query(
            'UPDATE login_student SET curriculum = true WHERE id = $1 ',
            [IDStudent]
        )
        res.status(200).json({sucess: true});
        console.log('curriculo alterado para true')
        
    }catch (error) {
        console.error('Erro ao atualizar curriculo para true:', error);
        res.status(500).json({ error: 'erro no servidor' })
    }
}




async function ConsultCurriculumStudent(req, res){

    const {IDStudent} = req.params;

    try{
        const result = await pool.query(
            `SELECT
            cs.id AS curriculum_id,
            cs.idstudent,
            cs.city,
            cs.course,
            cs.semester,
            cs.telephone,
            cs.portfolio,
            ls.id AS login_id,
            ls.name,
            ls.university,
            ls.email
        FROM
            curriculum_student cs
        JOIN
            login_student ls ON cs.idstudent = ls.id
        WHERE
            cs.idstudent = $1`,
        [IDStudent]
        )

        res.status(200).json(result.rows[0])


    }catch(error){
        console.error('erro ao buscar curriculo do usuario', error)
        res.status(500).send("erro no servidor");
    }

}

module.exports ={
RegisterCurriculumStudent,
SetStateCurriculumStudent,
ConsultCurriculumStudent
}
