
const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'linkjobs',
    password: 'coloque a senha',
    port: 5432,
});


module.exports = pool;