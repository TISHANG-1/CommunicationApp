const app =  require('./app') ; 
const dotenv  =  require('dotenv') ;  
const axios =  require("axios") ;
const cors = require('cors');


dotenv.config({path:"D:\\Tensor Go Assignment 2\\config.env"}); 
// Handling uncaught exception  
process.on("uncaughtException", (err)=>{   console.log('Error :') ; 
console.log(err.message) ; 
console.log('Shutting Down the server due to uncaught Exception'); 
server.close(()=>{
   process.exit(1); }) 
}); 

const morgan  =  require('morgan') ; 
app.use(morgan('tiny')) ;   

app.listen(process.env.PORT || 3000 , ()=> {console.log(`server is working on  http://localhost:${process.env.PORT}`)})  


// unhandled promise rejection
process.on("unhandledRejection" , err =>{console.log('Error :') ; 
   console.log(err.message) ; 
   console.log('Shautting Down the server due to unhandled promise'); 
   server.close(()=>{
      process.exit(1); 

   })  ;   
});   


