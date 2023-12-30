import React, { useState } from 'react';
import './Form.css'; // Import the CSS file

const EForm = () => {
  
 
  const [receiverEmail, setReceiverEmail] = useState(''); 
  const [subject,  setSubject]  = useState('') ; 
  const [cc, setCC] = useState('');
  const [bcc, setBCC] = useState(''); 
  const [textBody , setTextBody] = useState('') ;  
  const [htmlBody , setHtmlBody] = useState('') ; 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here, e.g., send an email
    console.log('Receiver Email:', receiverEmail);
    console.log('Cc:', cc);
    console.log('Bcc:', bcc); 
    const formData  =  { 
         RecevierEmail : receiverEmail, 
         Cc : cc, 
         Bcc: bcc,  
         subject:subject,  
         textBody: textBody , 
         htmlBody: htmlBody ,  
    } 
    
  };

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <h2>Send Basic email</h2>
      <div className="form-group">
        <label htmlFor="receiverEmail">Receiver Email:</label>
        <input
          type="email"
          id="receiverEmail"
          value={receiverEmail}
          onChange={(e) => setReceiverEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cc">CC:</label>
        <input
          type="email"
          id="cc"
          value={cc}
          onChange={(e) => setCC(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="bcc">BCC:</label>
        <input
          type="email"
          id="bcc"
          value={bcc}
          onChange={(e) => setBCC(e.target.value)}
        />
      </div>   

      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject} 
          required
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>   

      <div className="form-group">
        <label htmlFor="TextBody">Text Body:</label>
        <input
          type="text"
          id="TextBody"
          value={textBody}
          onChange={(e) => setTextBody(e.target.value)}
        />
      </div>   

      <div className="form-group">
        <label htmlFor="TextBody">HTML body:</label>
        <input
          type="text"
          id="HTMLBody"
          value={textBody}
          onChange={(e) => setHtmlBody(e.target.value)}
        />
      </div>  


      <button className="button-submit-form" type="submit">
        Send
      </button>
    </form>
  );
};

export default EForm;
