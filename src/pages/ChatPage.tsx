import React from 'react'
import ChatBubbles from '../components/ChatBubbles'
import InputMessage from '../components/InputMessage'

type Props = {
  user:string,
}
const ChatPage = ({user}:Props) => {
  return (
    <>
      <div className='relative'>
        <h1>Chat</h1>
        <ChatBubbles user = {user}></ChatBubbles>
        <InputMessage></InputMessage>

      </div>
    </>
  )
}

export default ChatPage
