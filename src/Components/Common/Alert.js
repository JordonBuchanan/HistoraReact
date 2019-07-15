import React from 'react';
import { useAlert } from 'react-alert';
 
const Alert = (props, face) => {
    const alert = useAlert()
   
    return (
      <span
        onClick={() => {
          alert.show(props)
        }}
      >
          logout
      </span>
    )
  }
 
export default Alert