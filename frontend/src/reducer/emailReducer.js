import * as actionType from "../constants/emailConstants" ; 

export const sendEmailReducer = (state ={email:null}, action)=>{ 
     switch(action.type){   
        case actionType.SEND_EMAIL_REQUEST:  
          return{ 
              ...state , 
              loading: true , 
              error: null , 
          }
        case actionType.SEND_EMAIL_SUCCESS:
        return{
            ...state , 
             loading: false , 
             email : action.payload,  
             error: null , 
        }
        case actionType.SEND_EMAIL_ERROR: 
        return{ 
            ...state , 
             loading: false , 
             error: action.payload,  
        }
        default: 
        return {...state } ; 
     }
}  

export const getEmailReducer = (state={emails: null}, action)=>{ 
      switch(action.type){ 
        case actionType.GET_EMAIL_REQUEST: 
         return { 
             ...state ,  
             loading: true ,  
             error: null, 
         }
         case actionType.GET_EMAIL_SUCCESS: 
         return {
             ...state , 
             loading: false , 
             emails: action.payload ,  
             error: null , 
         } 
         case actionType.GET_EMAIL_ERROR: 
         return{ 
             ...state , 
             loading: false, 
             error: action.payload ,  

         }
         default: 
          return{
             ...state , 
          }

      }   
    

}

export const getStatisticsReducer = (state = {statistics:null} , action)=>{ 
     switch(action.type){ 
         
        case actionType.GET_STATISTICS_REQUEST:  
             return {...state , 
                     error: null , 
                     loading: true ,         
            }

        case actionType.GET_STATISTICS_SUCCESS: 
          return{
            ...state , 
            error: null ,
            loading: false , 
            statistics: action.payload.data , 
          }

        case actionType.GET_STATISTICS_ERROR: 
             return { 
                ...state, 
                loading : false , 
                error: null ,
             }
        
        default : 
          return {...state , error: null} 



     }
     
}