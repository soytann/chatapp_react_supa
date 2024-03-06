import React from 'react'
import ChatBubbles from '../copmopnents/ChatBubbles'
import InputMessage from '../copmopnents/InputMessage'

const ChatPage = () => {
  return (
    <>
      <div>
        <h1>Chat</h1>
        <ChatBubbles></ChatBubbles>
        <InputMessage></InputMessage>

      </div>
    </>
  )
}

export default ChatPage
