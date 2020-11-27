import React from 'react'

const MiniInfo = ({ txt, icon }) => {
  return (
    <span className="mini-info">
      <i className={`mini-info__icon ${icon}`}></i>
      {txt}
    </span>
  )
}

export default MiniInfo
