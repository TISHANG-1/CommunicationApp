// HomePage.js

import React from 'react'; 
import "./Home.css"
import DropdownButton from '../Dropdown/DropdownButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Home = () => {    

  const navigate =  useNavigate() ; 
  const dispatch = useDispatch() ; 

  const loadSend = async()=>{   
       
        navigate("/show-mails" , {state: {display: "send"}}) ; 
   }
  const loadRecieve = async()=>{  
      
        navigate("/show-mails" , {state: {display: "recieve"}}); 
  }  
  const loadStatistics = async()=>{ 
        navigate('/statistics')
  }

  return (
    <div className="container"> 
     <div className="send-email-container">
        <div className="send-email">
          <h2> {<DropdownButton/>}</h2>
          {/* Add content for the send email section */}
        </div>
      </div>
      {/* First Row: Floating Card Divs */}
      <div className="card-container">
        <div className="card" onClick={loadSend}>
          <h2>Show All Sent Emails</h2>
          {/* Add content for the first card */}
        </div>
        <div className="card"  onClick={loadRecieve}>
          <h2>Show All Received Emails</h2>
          {/* Add content for the second card */}
        </div>  
        <div className="card"  onClick={loadStatistics}>
          <h2>Show Statistics</h2>
          {/* Add content for the second card */}
        </div>
      </div>

      {/* Second Row: Send Email Div */}
     
    </div>
  );
};

export default Home;
