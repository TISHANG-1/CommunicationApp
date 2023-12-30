// HomePage.js

import React from 'react'; 
import "./Home.css"
import DropdownButton from '../Dropdown/DropdownButton';

const Home = () => {
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
        <div className="card">
          <h2>Show All Sent Emails</h2>
          {/* Add content for the first card */}
        </div>
        <div className="card">
          <h2>Show All Received Emails</h2>
          {/* Add content for the second card */}
        </div>
      </div>

      {/* Second Row: Send Email Div */}
     
    </div>
  );
};

export default Home;
