import React from 'react';
import Alert from 'react-bootstrap/Alert';
import * as Icon from 'react-bootstrap-icons';

const Error = ({message}) => {

  return (
    <Alert variant = 'danger' className = 'mt-5 w-50 text-center fw-bold'>
        <Icon.ExclamationTriangle className = 'me-2' />
        {message}
    </Alert>
    
  )
}

export default Error;