import React, { useState } from 'react';
import './Form.css'; // Import the CSS file
import { useLocation } from 'react-router-dom';

const Form = () => {
  const location = useLocation();
  const templateAlias = location.state?.template;
  const [receiverEmail, setReceiverEmail] = useState('');
  const [cc, setCC] = useState('');
  const [bcc, setBCC] = useState('');

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
         templateAlais: templateAlias,
    } 

  };

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <h2>Send {templateAlias} email</h2>
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
      <button className="button-submit-form" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
