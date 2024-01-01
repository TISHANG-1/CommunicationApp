const express  = require('express'); 
const { isAuthenticatedUser } = require('../middleware/auth');  
const email  = require('../controllers/emailController') ; 
const Router  =  express.Router() ; 

Router.route('/sendEmail').post( isAuthenticatedUser , email.sendEmail ) ; 
Router.route('/sendEmailT').post( isAuthenticatedUser , email.sendEmailT ) ; 
Router.route('/getSendEmail').get(isAuthenticatedUser , email.getSendEmail) ; 
Router.route('/getInBounEmail').get(isAuthenticatedUser , email.getInBoundEmail ) ; 
Router.route('/getStatistics').get(isAuthenticatedUser , email.getStatistics ) ; 



module.exports = Router ; 