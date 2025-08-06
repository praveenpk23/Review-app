// import React from 'react'

const ConfirmBox = ({onCancel,onClick,message}) => {
  return (
    <div>
       <div className="confirm-overlay">
      <div className="confirm-box">
        <p className="confirm-message ">{message}</p>
        <div className="confirm-buttons">
          <button className="confirm-btn confirm" onClick={onClick} >Yes</button>
          <button className="confirm-btn cancel" onClick={onCancel} >No</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ConfirmBox
