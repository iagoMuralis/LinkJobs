const pool = require('../../../../database')

async function RegisterStudent(req, res) {
    const { name, university, email, password } = req.body;
    try {

        const existingUser = await pool.query(
            'SELECT * FROM login_student WHERE email = $1',
            [email]
        );

        if (existingUser.rows.length > 0) {
            // Se o email já estiver em uso, retorne um erro
            return res.status(400).json({ error: 'Email já cadastrado' });
        }

        const result = await pool.query(
            'INSERT INTO login_student (name, university, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, university, email, password]
        );

        res.status(201).json(result.rows[0]);
        console.log('estudante cadastrada com sucesso')

    } catch (error) {
        console.error('erro ao cadastrar estudante');
        res.status(500).json({ error: 'erro no servidor' })
    }

}

async function AuthenticationStudent(req, res) {
    const { email, password } = req.body;

    try {
        const result = await pool.query(
            'SELECT * FROM login_student WHERE email = $1 AND password = $2',
            [email, password]
        )

        if (result.rows.length === 0) {
            // Credenciais inválidas
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        const user = result.rows[0];
        res.status(200).json({ message: 'Login bem-sucedido', user });
    } catch (error) {
        console.error('Erro ao autenticar estudante', error);
        res.status(500).json({ error: 'Erro no servidor' });
    }
}

module.exports = {
    RegisterStudent,
    AuthenticationStudent,
}
