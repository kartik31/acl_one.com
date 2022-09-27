var executeQuery=require('../helpers/dbconnection')
async function signup(userData){
    try{
        let {username,password,role}=userData
        let dbQuery=`insert into Users (userName,userPassword,userRole) values (${username},${password},${role})`
        let data=await executeQuery(dbQuery)
        return data
    }
    catch(err){
        throw err;
    }
    
}

async function login(userData){
    try{
        let {username,password}=userData
        let dbQuery=`select userName,userRole from Users where userName=${username} and userPassword=${password}`
        let data=await executeQuery(dbQuery)
        if(!data.length)
        {
            throw new Error('invalid username or password')
        }
        return data
    }
    catch(err){
        throw err;
    }
}



module.exports={signup,login}