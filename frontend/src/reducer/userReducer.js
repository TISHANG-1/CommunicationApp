import * as actionType from "../constants/userAction" ;  



export const userReducer = ( state = {authData : []} , action) =>{ 
      switch(action.type)
      {   
       case  actionType.USER_LOGIN_GOOGLE_AUTH:  
        console.log(action?.data) ;
        localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
        return {  
             authData: action?.data, 
             loading: false, 
             ...state, 
        } 
        case actionType.USER_LOGOUT_GOOGLE_AUTH: 
          localStorage.clear() ; 
          return{ 
             authData:undefined, 
             loading: false, 
             err: null,  
          }
        case actionType.USER_AUTH_ERROR: 
          return{ 
             error: action.data, 
             ...state,
          }
        default : 
          return {...state ,}
      }
     

}