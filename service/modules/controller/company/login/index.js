const pool = require('../../../../database')

async function RegisterCompany(req, res) {
    const { name, city, email, password } = req.body;
    try {

        const existingUser = await pool.query(
            'SELECT * FROM login_company WHERE email = $1',
            [email]
        );

        if (existingUser.rows.length > 0) {
            // Se o email já estiver em uso, retorne um erro
            return res.status(400).json({ error: 'Email já cadastrado' });
        }

        const result = await pool.query(
            'INSERT INTO login_company (name, city, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, city, email, password]
        );

        res.status(201).json(result.rows[0]);
        console.log('empresa cadastrada com sucesso')

    } catch (error) {
        console.error('erro ao cadastrar empresa');
        res.status(500).json({ error: 'erro no servidor' })
    }

}

async function AuthenticationCompany(req, res){
    const {email, password} = req.body;

    try{
        const result = await pool.query(
            'SELECT * FROM login_company WHERE email = $1 AND password = $2',
            [email, password]
        )

        if (result.rows.length === 0) {
            // Credenciais inválidas
            return res.status(401).json({ error: 'Credenciais inválidas' });
          }
      
          const user = result.rows[0];
         res.status(200).json({ message: 'Login bem-sucedido', user });
        } catch (error) {
          console.error('Erro ao autenticar empresa', error);
          res.status(500).json({ error: 'Erro no servidor' });
        }
      }

module.exports = {
    RegisterCompany,
    AuthenticationCompany,
}
    