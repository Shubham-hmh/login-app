import  Jwt  from "jsonwebtoken";


export default async  function Auth(req,res,next){

    try {
        //access authorize header to validate request. (after bearer token)
        const token =req.headers.authorization.split(" ")[1];

        //retrive the user details to the logged in user.
         const decodedToken = await Jwt.verify(token,process.env.JWT_SECRET);
         req.user=decodedToken;
        //return res.json(decodedToken);
        next();

    } catch (error) {
        res.status(401).json({error:"Authentication Failed"});
        
    }

}


export function localVariables(req,res,next){
    req.app.locals={
        OTP:null,
        resetSession:false
    }
    next()
}