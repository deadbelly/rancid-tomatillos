import React from 'react';


const Error = ({status, text}) => {
  return (
    <>
      <h1 className='error-status'>{status} - {text}</h1>
      <p className='error-expl'>{status === 404 && 'What you\'re looking for isn\'t here. Double Check the url and try again.'}
      {status >= 500 && status < 600 && 'Something went wrong on our end. Try reloading the page. If the problem persists try back later.'}</p>
    </>
  );
}

export default Error;
