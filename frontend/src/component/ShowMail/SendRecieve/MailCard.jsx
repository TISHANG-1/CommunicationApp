// MailCard.jsx
import React from 'react';
import './MailCard.css'; // Import the CSS file

const MailCard = ({ mail }) => {
  const { From, To, Subject, MessageID, TemplateAlias, ReceivedAt } = mail;

  return (
    <div className="mail-card">
      <div className="mail-header">
        <div className="mail-id">Mail ID: {MessageID}</div>
        <div className="from">From: {From}</div>
      </div>
      <div className="recipient">
        <div className="recipient-info">
          <span className="recipient-email">To: {To.length > 0 && To[0].Email}</span>
        </div>
        <div className="subject"> <b>Subject:</b> {Subject ? Subject : TemplateAlias ? TemplateAlias : 'No Subject'}</div>
      </div> 
      <div className="date">
        Date send: {ReceivedAt}
      </div>
    </div>
  );
};

export default MailCard;
