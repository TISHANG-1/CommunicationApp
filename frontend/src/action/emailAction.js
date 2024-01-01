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
     await axios.post(link , serializedFormData , config ).then(async(res)=>{ 
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
     await axios.post(link , serializedFormData , config ).then(async(res)=>{ 
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



export const getAllSendEmail = ()=> async(dispatch)=>{ 
     dispatch({type: actionType.GET_EMAIL_REQUEST}); 
     const config = {headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`}} ; 
     let link = `http://localhost:4000/api/v1/getSendEmail`   

     await axios.get(link, config).then(async(res)=>{ 
               dispatch({type: actionType.GET_EMAIL_SUCCESS ,
               payload: res.data.data.Messages}) ; 
     })
     .catch((err)=>{ 
        dispatch({type: actionType.GET_EMAIL_ERROR , 
            payload : err });
     }) ; 
}


export const getAllRecievedEmail = ()=> async(dispatch)=>{ 
    dispatch({type: actionType.GET_EMAIL_REQUEST});  
    const config = {headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`}} ; 
    
    let link = `http://localhost:4000/api/v1/getInBounEmail`   

    await axios.get(link , config).then(async(res)=>{ 
              dispatch({type: actionType.GET_EMAIL_SUCCESS ,
              payload: res.data.data.InboundMessages}) ; 
    })
    .then((err)=>{ 
       dispatch({type: actionType.GET_EMAIL_ERROR , 
           payload : err });
    }) ; 
}


export const getStatistics = () => async(dispatch)=>{ 
      dispatch({type: actionType.GET_STATISTICS_REQUEST}) ;  
      let config = {headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`}} ;  

      let link = `http://localhost:4000/api/v1/getStatistics`  

      await axios.get(link , config).then(async(res)=>{ 
          dispatch({type: actionType.GET_STATISTICS_SUCCESS ,
          payload: res.data}) ; 
      })
      .then((err)=>{ 
         dispatch({type: actionType.GET_STATISTICS_ERROR , 
         payload : err });
      }) ; 


}