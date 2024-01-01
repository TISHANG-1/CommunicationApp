import * as actionType from "../constants/emailConstants"; 

import axios from "axios" ; 
import Cookies from "js-cookie" ; 

axios.defaults.withCredentials  = true ; 

export const sendEmail  = (formData)=> async(dispatch)=>{ 
     
     dispatch({type: actionType.SEND_EMAIL_REQUEST, 
     });
     
     let  link  = `http://localhost:4000/api/v1/sendEmail` ; 

     const config = {headers: {"Content-Type": "application/json" , "Authorization" : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`}} ; 
     
     const serializedFormData = JSON.stringify(formData); 
     console.log(serializedFormData) ; 
     axios.post(link , serializedFormData , config ).then(async(res)=>{ 
           await dispatch({type: actionType.SEND_EMAIL_SUCCESS, 
           payload : res.data, 
           })
     })
     .catch((err)=>{ 
          dispatch({type: actionType.SEND_EMAIL_ERROR , 
        payload : err }); 
     }); 
} 

export const sendEmailWithTemplate  = (formData)=> async(dispatch)=>{ 
     
     dispatch({type: actionType.SEND_EMAIL_REQUEST, 
     });
     
     let  link  = `http://localhost:4000/api/v1/sendEmailT` ; 

     const config = {headers: {"Content-Type": "application/json" , "Authorization" : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`}} ; 
     
     const serializedFormData = JSON.stringify(formData); 
     console.log(serializedFormData) ; 
     axios.post(link , serializedFormData , config ).then(async(res)=>{ 
           await dispatch({
           type: actionType.SEND_EMAIL_SUCCESS, 
           payload : res.data, 
           })
     })
     .catch((err)=>{ 
          dispatch({type: actionType.SEND_EMAIL_ERROR , 
        payload : err }); 
     }); 
} 



const getAllSendEmail = ()=> async(dispatch)=>{ 
     dispatch({type: actionType.GET_EMAIL_REQUEST}); 
     const config = {headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`}} ; 
     let link = `http://localhost:4000/api/v1/getSendEmail`   

     axios.get(link, config).then(async(res)=>{ 
               dispatch({type: actionType.GET_EMAIL_SUCCESS ,
               payload: res.data}) ; 
     })
     .then((err)=>{ 
        dispatch({type: actionType.GET_EMAIL_ERROR , 
            payload : err });
     }) ; 
}


const getAllRecievedEmail = ()=> async(dispatch)=>{ 
    dispatch({type: actionType.GET_EMAIL_REQUEST});  
    const config = {headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`}} ; 
    
    let link = `http://localhost:4000/api/v1/getInBoundEmail`   

    axios.get(link , config).then(async(res)=>{ 
              dispatch({type: actionType.GET_EMAIL_SUCCESS ,
              payload: res.data}) ; 
    })
    .then((err)=>{ 
       dispatch({type: actionType.GET_EMAIL_ERROR , 
           payload : err });
    }) ; 
}