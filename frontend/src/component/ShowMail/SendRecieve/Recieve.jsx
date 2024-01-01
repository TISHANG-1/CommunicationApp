import React, { Fragment, useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux'; // Importing useSelector and useDispatch
import { getAllRecievedEmail } from '../../../action/emailAction';
import { useAlert } from 'react-alert';
import './Send.css'
import ReceivedMailCard from './RecievedMailCard';

const Recieve = () => {
  const { emails, loading, error } = useSelector((state) => state.getEmail);
  const dispatch = useDispatch(); // Adding useDispatch
  const alert = useAlert();
  console.log(emails) ;
  useEffect(() => {
    dispatch(getAllRecievedEmail());
  }, []); // Fixing the dependency array

  useEffect(() => {
    if (error) {
      alert.error(error);
    }
  }, [error, alert]); // Fixing the dependency array

  return (
    <Fragment>
        <div className='mail-container'> 
      { loading ? (
        <BallTriangle height={400}  color="#00ABFB" secondaryColor='transparent'/>
      ) :
        (
        // Using parentheses to properly wrap the map function
        emails?.map((mail) => <ReceivedMailCard key={mail.MessageID} mail={mail} />)
         )
      }
      </div>
    </Fragment>
  );
};

export default Recieve;
