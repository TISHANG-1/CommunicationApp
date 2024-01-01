const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("./catchAsyncErrors"); 
const jwt = require("jsonwebtoken") ; 


exports.isAuthenticatedUser =  catchAsyncErrors(async(req ,res , next) => { 
     //   console.log(req);  
       const token = req.headers.authorization.split(" ")[1] ; 
       decodedData  = jwt.decode(token) ; 
       req.userId = decodedData?.sub ;   
     
       next(); 
})   
