import React, { useEffect , Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStatistics } from '../../action/emailAction';
import { BallTriangle } from 'react-loader-spinner';
import { useAlert } from 'react-alert'; 
import Table from './Table'; 
import "./Statistics.css"

const Statistics = () => {  
  const {statistics , loading , error} = useSelector(state=>state.statistics) ;  
  const dispatch = useDispatch() ;  
  const alert = useAlert(); 
  useEffect(()=>{
       dispatch(getStatistics()) ; 
  } , []) ; 
  
  useEffect(()=>{ 
      if(error){ 
          alert.error(error) ; 
      } 
  } , [error])
  return (
   <Fragment> 
     <div className='mail-container-1'> 
     { loading ? (
        <BallTriangle height={400}  color="#00ABFB" secondaryColor='transparent'/>
      ) :
        (
        // Using parentheses to properly wrap the map function
          statistics && <Table  data={statistics}/>
         )
      }
      </div>
     </Fragment>
  )
}

export default Statistics
