import React from 'react'
import './Alert.css';

const index = ({type, msg}) => {
  return (
    <div className={`alert ${type === 'error' ? 'alert-error' : 'alert-success'}`}>
      <img 
        className='alert__gif'
        src={`${process.env.PUBLIC_URL}/img/ruido.gif`}
        alt="empty_field"
      />
      <span className='alert__msg'>{msg}</span>
    </div>
  )
}

export default index
