import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Send from './SendRecieve/Send';
import Recieve from './SendRecieve/Recieve';

const ShowMail = () => {  
  const location = useLocation() ; 
  const display = location.state?.display ; 
  console.log(display) ;
  return (
     <Fragment>
     {display === 'send'? <Send/>:<Recieve/>  }
     </Fragment>
     ) ; 
}

export default ShowMail
