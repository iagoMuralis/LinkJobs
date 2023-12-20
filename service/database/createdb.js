const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres', // Use o banco de dados padrão 'postgres' para criar um novo banco
  password: '4321',
  port: 5432,
});

// Função para criar o banco de dados
async function createDatabase() {
    try {
      const result = await pool.query('SELECT 1 FROM pg_database WHERE datname = $1 LIMIT 1', ['linkjobs']);
  
      if (result.rows.length === 0) {
        await pool.query('CREATE DATABASE linkjobs');
        console.log('Banco de dados "linkjobs" criado com sucesso!');
      } else {
        console.log('Banco de dados "linkjobs" já existe.');
      }
    } catch (error) {
      console.error('Erro ao criar o banco de dados:', error);
    } finally {
      await pool.end();
    }
  }

// Função para criar tabelas
async function createTables() {
  const linkjobsPool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'linkjobs',
    password: '4321',
    port: 5432,
  });

  try {
    // Tabela "jobs"
    await linkjobsPool.query(`
CREATE TABLE IF NOT EXISTS public.jobs
(
    id serial PRIMARY KEY,
    idcompany varchar(1000),
    idjob serial,
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
    password varchar(60)
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
    password varchar(60),
    curriculum BOOLEAN DEFAULT false
);
`);

await linkjobsPool.query(`
CREATE TABLE IF NOT EXISTS public.curriculum_student
(
    id serial PRIMARY KEY,
    idstudent integer,
    city varchar(35),
    course varchar(30),
    semester varchar(60),
    telephone varchar(35),
    portfolio varchar(100)
);
`);

await linkjobsPool.query(`
CREATE TABLE IF NOT EXISTS public.confirmed_job
(
    id serial PRIMARY KEY,
    idcompany integer,
    idjob integer,
    namejob varchar(100),
    idstudent integer,
    namestudent varchar(100)
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
