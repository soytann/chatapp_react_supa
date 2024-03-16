import React from 'react'
import ChatBubbles from '../components/ChatBubbles'
import InputMessage from '../components/InputMessage'
import ChatHeader from '../components/ChatHeader'

import Header from '../components/Header'
import SideBar from '../components/SideBar'

type Props = {
  user: string,
  handleOpenPhrases: () => void,
  handleClosePhrases: () => void,
  results: any,
  insertMessages: () => void,
  input: string,
  setInput: (e) => any,
}
const ChatPage = ({ user, handleOpenPhrases, handleClosePhrases,results,insertMessages,input,setInput}: Props) => {
  // const [displayPhrase, setDisplayPhrase] = useState("");



  return (
    <>
      
      {/* <div className="bg-opacity-80">
        <Header />
      </div>
      <SideBar/> */}
      <div className="my-20">
        <ChatBubbles user={user} handleClosePhrases={handleClosePhrases}></ChatBubbles>

        <InputMessage handleOpenPhrases={handleOpenPhrases} results={results} insertMessages={insertMessages} input={input} setInput={setInput}></InputMessage>

      </div>
    </>
  )
}

export default ChatPage
