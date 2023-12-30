import React from 'react';

const EHome = () => {
  return (
    <div style={styles.container}>
      <div style={styles.introContainer}>
        <h1 style={styles.heading}>Welcome to our Communication App!</h1>
        <p style={styles.description}>
          Experience seamless communication with our feature-rich application.
          Sign in to unlock all the amazing features and stay connected.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
  },
  introContainer: {
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#333', // Adjust the color to your preference
  },
  description: {
    fontSize: '1.2em',
    color: '#666', // Adjust the color to your preference
  },
};

export default EHome;
