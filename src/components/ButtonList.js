import React from 'react'
import Button from './Button'

const list = ["All", "Gaming", "Sogns", "Live", "Soccer", "Cricket", "Cooking", "Valentine"];

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((item) => {
        return(
          <Button name={item} />
        )
      })}
    </div>
  )
}

export default ButtonList
