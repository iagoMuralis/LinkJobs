const pool = require('../../../../database')


//login

async function ConsultStudent(req, res) {
    const { IDStudent} = req.params

    try {
        const result = await pool.query(
            'SELECT * FROM login_student WHERE id = $1',
            [IDStudent]
        );
        const user = result.rows[0];
        res.status(200).json({ message: 'Consulta realizada com sucesso', user });
    } catch (error) {
        console.error('Erro ao consultar dados do estudante', error);
        res.status(500).json({ error: 'Erro no servidor' });
    }
}

async function UpdateStudent(req, res) {
    const { id, name, university, email, password } = req.body;

    try {
        const result = await pool.query(
            'UPDATE login_student SET name = $1, university = $2, email = $3, password = $4 WHERE id = $5',
            [name, university, email, password, id]
        );

        res.status(200).json({ message: 'Estudante atualizado com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar dados do estudante', error);
        res.status(500).json({ error: 'Erro no servidor' });
    }
}



//curriculo

async function ConsultCurriculumStudent(req, res) {
    const { IDStudent} = req.params

    try {
        const result = await pool.query(
            'SELECT * FROM curriculum_student WHERE idstudent = $1',
            [IDStudent]
        );
        const user = result.rows[0];
        res.status(200).json({ message: 'Consulta realizada com sucesso', user });
    } catch (error) {
        console.error('Erro ao consultar dados do curriculum do estudante', error);
        res.status(500).json({ error: 'Erro no servidor' });
    }
}




async function UpdateCurriculumStudent(req, res) {
    const { id, city, course, semester, telephone, portfolio } = req.body;

    try {
        const result = await pool.query(
            'UPDATE curriculum_student SET city = $1, course = $2, semester = $3, telephone = $4, portfolio = $5 WHERE id = $6',
            [city, course, semester, telephone, portfolio, id]
        );

        res.status(200).json({ message: 'curriculum de Estudante atualizado com sucesso' });
    } catch (error) {
        console.error('Erro ao atualizar dados do curriculo de estudante', error);
        res.status(500).json({ error: 'Erro no servidor' });
    }
}





module.exports = {
    ConsultStudent,
    UpdateStudent,
    ConsultCurriculumStudent,
    UpdateCurriculumStudent,
    
}
