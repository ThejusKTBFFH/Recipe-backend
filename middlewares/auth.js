const jwt = require('jsonwebtoken');


exports.isAuthenticated =  async(req,res,next)=>{
    try{
        const {token} = req.cookies;
        if(!token){
            return res.status(401).json({
                message: "Please login first"
            });
        }

        const verifyUser = await jwt.verify(token,process.env.MY_JWT);
    }
    catch(error){

    }
}