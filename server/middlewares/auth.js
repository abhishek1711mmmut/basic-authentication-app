const jwt=require('jsonwebtoken');
// Configuring dotenv to load environment variables from .env file
require('dotenv').config();

// authentication
exports.auth=async(req, res, next)=>{
    try{
        // extract token
        const token=req.cookies.token || req.body.token || req.header('Authorization').replace('Bearer ', '');

        // if token missing, then return response
        if(!token){
            return res.status(401).json({
                success:false,
                message:'Token is missing'
            });
        }

        // verify the token
        try{
            // Verifying the JWT using the secret key stored in environment variables
            const decode=jwt.verify(token, process.env.JWT_SECRET);
            // console.log(decode);
            // Storing the decoded JWT payload in the request object for further use
            req.user=decode;
        }catch(error){
            console.log(error);
            // verification issue
            return res.status(401).json({
                success:false,
                message:'token is invalid'
            });
        }
        next();
    }catch(error){
        return res.status(401).json({
            success:false,
            message:'Something went wrong while validating the token'
        });
    }
}