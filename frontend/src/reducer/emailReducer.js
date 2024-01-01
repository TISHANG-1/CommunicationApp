import * as actionType from "../constants/emailConstants" ; 

export const sendEmailReducer = (state ={sendEmail:null}, action)=>{ 
     switch(action.type){   
        case actionType.SEND_EMAIL_REQUEST:  
          return{ 
              loading: true ,
              ...state , 
          }
        case actionType.SEND_EMAIL_SUCCESS:
        return{
             loading: false , 
             sendEmail : action.payload, 
             ...state , 
        }
        case actionType.SEND_EMAIL_ERROR: 
        return{ 
             loading: false , 
             err: action.payload, 
             ...state , 
        }
        default: 
        return {...state } ; 
     }
}  

const getEmailReducer = (state={emails: null}, action)=>{ 
      switch(action.type){ 
        case actionType.GET_EMAIL_REQUEST: 
         return { 
             loading: true , 
             ...state ,  
         }
         case actionType.GET_EMAIL_SUCCESS: 
         return {
             loading: false , 
             emails: action.payload , 
             ...state , 
         } 
         case actionType.GET_EMAIL_ERROR: 
         return{ 
             loading: false, 
             error: action.payload , 
             ...state , 
         }
         default: 
          return{
             ...state , 
          }

      }   
    

}

