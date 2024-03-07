import React from 'react'
import ChatBubbles from '../components/ChatBubbles'
import InputMessage from '../components/InputMessage'

const ChatPage = () => {
  return (
    <>
      <div className='relative'>
        <h1>Chat</h1>
        <ChatBubbles></ChatBubbles>
        <InputMessage></InputMessage>

      </div>
    </>
  )
}

export default ChatPage
