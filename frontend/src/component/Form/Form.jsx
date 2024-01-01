import React, { useState } from 'react';
import './Form.css'; // Import the CSS file
import { useLocation, useNavigate } from 'react-router-dom';
import { sendEmailWithTemplate } from '../../action/emailAction';
import { useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';

const Form = () => {
  const location = useLocation(); 
  const dispatch = useDispatch() ;  
  const navigate = useNavigate() ;  
  const alert = useAlert() ; 
  const templateAlias = location.state?.template;
  const [receiverEmail, setReceiverEmail] = useState('');
  const [cc, setCC] = useState('');
  const [bcc, setBCC] = useState('');
  const [recieverName, setReceiverName] = useState('');
  const [companyName, setcompanyName] = useState('');
  const [productName, setproductName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the form submission logic here, e.g., send an email
    console.log('Receiver Email:', receiverEmail);
    console.log('Cc:', cc);
    console.log('Bcc:', bcc); 
    const formData  =  {  
         senderEmail : JSON.parse(localStorage.getItem('profile')).result.email, 
         RecevierEmail : receiverEmail, 
         Cc : cc, 
         Bcc: bcc,  
         recieverName: recieverName, 
         companyName: companyName, 
         productName: productName, 
         templateAlais: templateAlias, 
    }   
    await dispatch(sendEmailWithTemplate(formData)) ;  
    alert.success('email sent') ; 
    navigate('/')

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
          placeholder='if applicable'
        />
      </div>
      <div className="form-group">
        <label htmlFor="bcc">BCC:</label>
        <input
          type="email"
          id="bcc"
          value={bcc}
          onChange={(e) => setBCC(e.target.value)} 
          placeholder='if applicable'
        />
      </div>  
       <div className="form-group">
        <label htmlFor="RecieverName">Recievers's Name:</label>
        <input
          type="text"
          id="recieversname"
          value={recieverName}
          onChange={(e) => setReceiverName(e.target.value)} 
          placeholder='if applicable'
        />
      </div> 
      <div className="form-group">
        <label htmlFor="Company's Name">Sender's Corporation Name:</label>
        <input
          type="text"
          id="companyname"
          value={companyName}
          onChange={(e) => setcompanyName(e.target.value)} 
          placeholder='if applicable'
        />
      </div>
      <div className="form-group">
        <label htmlFor="Company's Name"> Product Name:</label>
        <input
          type="text"
          id="productname"
          value={productName}
          onChange={(e) => setproductName(e.target.value)} 
          placeholder='if applicable'
        />
      </div>
      <button className="button-submit-form" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
