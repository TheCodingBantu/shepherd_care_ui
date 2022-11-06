const jwt=require('jsonwebtoken')

const requireAuth=(req,res,next)=>{
    const token=req.cookies.jwt;

    // check token exists and is valid
    if(token){
        jwt.verify(token,'this is a secret string',(err,decodedToken)=>{
            if(err){
                console.log(err.message);
            }
            else{
                console.log(decodedToken);
                next()
            }
        })
    }
    else{
        console.log('no token');
    }

}

module.exports={
    requireAuth
}