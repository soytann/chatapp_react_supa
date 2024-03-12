import React from 'react'
import ChatBubbles from '../components/ChatBubbles'
import InputMessage from '../components/InputMessage'
import ChatHeader from '../components/ChatHeader'
import { Children } from 'react'

type Props = {
  user: string,
}
const ChatPage = ({ user ,children}: Props) => {
  return (
    <>
      <div className="bg-opacity-80">
        <ChatHeader />
      </div>
      <div className="my-20">
        <ChatBubbles user={user}></ChatBubbles>
        <InputMessage></InputMessage>
      </div>
    </>
  )
}

export default ChatPage
