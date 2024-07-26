import React from 'react'

const Button = ({label,onClick,className,type}) => {
  return (
    <div>
        <button onClick={onClick} className={className} type={type}>{label}</button>
        </div>
  )
}

export default Button