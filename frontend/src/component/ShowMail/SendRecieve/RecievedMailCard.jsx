// ReceivedMailCard.jsx
import React from 'react';
import './MailCard.css';

const ReceivedMailCard = ({ mail }) => {
  const { From, FromFull, Subject, Date, To , MessageID, Status } = mail;
 console.log(FromFull) ; 
 console.log(FromFull) ; 
  return (
    <div className="mail-card">
      <div className="mail-header">
        <div className="mail-id">Mail ID: {MessageID}</div>
        <div className="from">From: {From}</div>
        <div className="from">Sender Name: {FromFull?.Name}</div>
      </div>
      <div className="recipient">
        <div className="recipient-info">
          <span className="recipient-email">To: {To}</span>
        </div> 
        

        <div className="subject"> <b>Subject:</b> {Subject ? Subject : 'No Subject'}</div>
      </div>
    </div>
  );
};

export default ReceivedMailCard;
