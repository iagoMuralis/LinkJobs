const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres', // Use o banco de dados padrão 'postgres' para criar um novo banco
  password: 'coloque a senha',
  port: 5432,
});

// Função para criar o banco de dados
async function createDatabase() {
  try {
    await pool.query('CREATE DATABASE linkjobs IF NOT EXISTS ');
    console.log('Banco de dados "linkjobs" criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar o banco de dados ou ja foi criado', error);
  } finally {
    // Certifique-se de encerrar a conexão após a execução
    await pool.end();
  }
}

// Função para criar tabelas
async function createTables() {
  const linkjobsPool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'linkjobs',
    password: 'coloque a senha',
    port: 5432,
  });

  try {
    // Tabela "jobs"
    await linkjobsPool.query(`
CREATE TABLE IF NOT EXISTS public.jobs
(
    id serial PRIMARY KEY,
    idcompany varchar(1000),
    namecompany varchar(70),
    namejob varchar(100),
    locationjob varchar(60),
    descriptionjob varchar(200),
    date varchar(15)
);
`);

    // Tabela "login_company"
    await linkjobsPool.query(`
CREATE TABLE IF NOT EXISTS public.login_company
(
    id serial PRIMARY KEY,
    name varchar(100),
    city varchar(50),
    email varchar(100),
    password char(60)
);
`);

    // Tabela "login_student"
    await linkjobsPool.query(`
CREATE TABLE IF NOT EXISTS public.login_student
(
    id serial PRIMARY KEY,
    name varchar(100),
    university varchar(50),
    email varchar(100),
    password char(60)
);
`);

    console.log('Tabelas criadas com sucesso!');
  } catch (error) {
    console.error('Erro ao criar tabelas:', error);
  } finally {
    // Certifique-se de encerrar a conexão após a execução
    await linkjobsPool.end();
  }
}

// Executar as funções
createDatabase()
  .then(createTables)
  .catch(error => console.error('Erro geral:', error));
