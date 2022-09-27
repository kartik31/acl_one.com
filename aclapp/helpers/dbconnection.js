const { Pool, Client } = require('pg')
// pools will use environment variables
// for connection information

const pool = new Pool({
  user: 'admin',
  host: 'localost',
  database: 'ACL',
  password: 'admin',
  port: 5432
})

async function executeQuery(dbQuery){
    try{
        const connection=await pool.connect()
        const data=connection.query(dbQuery)
        
        connection.end()
        return data
    }
    catch(err){
        throw err;
    }
    
}

module.exports=executeQuery