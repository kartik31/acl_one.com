var executeQuery=require('../helpers/dbconnection')

var checkRole=async (req,res,next)=>{
let username=req.headers.username
let requestMethod = req.method.toLower();
let dbQuery=`select * from Users us join RolePermisions rp on us.userRole=rp.roleName where us.userName=${username}`
let data=await executeQuery(dbQuery)
if(data[requestMethod])
next()
else
res.status(401).json({ message: "Not authorized to access endpoint" })
}
module.exports=checkRole;