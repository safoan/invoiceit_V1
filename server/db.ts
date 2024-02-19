import {Pool} from  'pg' ; 

const pool = new Pool ({
    user: "postgres",
    password : "0000",
    database : "invoiceit" ,
    host : "localhost",
    port : 5432,
});

export default pool;