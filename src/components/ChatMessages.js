import React from 'react'

const ChatMessages = ({name, messages}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
      <img
          className="h-8"
          alt="user"
          src="https://pluspng.com/img-png/png-user-icon-circled-user-icon-2240.png"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{messages}</span>
    </div>
  )
}

export default ChatMessages
