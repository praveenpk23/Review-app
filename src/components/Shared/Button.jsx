import React from 'react'

const Button = ({type="button",version="primary",isDisabled=true,children}) => {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
        {children}
    </button>
  )
}

export default Button
