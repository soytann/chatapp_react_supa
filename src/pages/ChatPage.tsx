import React from 'react'
import ChatBubbles from '../components/ChatBubbles'
import InputMessage from '../components/InputMessage'
import ChatHeader from '../components/ChatHeader'

import Header from '../components/Header'
import SideBar from '../components/SideBar'

type Props = {
  user: string,
  handleOpenPhrases: any
  handleClosePhrases:any
}
const ChatPage = ({ user,handleOpenPhrases, handleClosePhrases }: Props) => {
  return (
    <>
      
      {/* <div className="bg-opacity-80">
        <Header />
      </div>
      <SideBar/> */}
      <div className="my-20">
        <ChatBubbles user={user} handleClosePhrases={handleClosePhrases}></ChatBubbles>
        <InputMessage handleOpenPhrases={handleOpenPhrases}></InputMessage>
      </div>
    </>
  )
}

export default ChatPage
