import React from 'react'
import Button from './Button'
const CancleButton = ({label,onClick}) => {
  return (
    <Button label={label} onClick={onClick} className="btn btn-success cancle btn-md  border-white mt-2 rounded-[10%]" ></Button>
  )
}

export default CancleButton