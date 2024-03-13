import React,{ ReactNode } from 'react'
import Header from './Header';
import SideBar from "./SideBar"


type Props = {
  children: ReactNode
  handleOpenPhrases: any //書き直す
  isPhraseOpen: any //書き直す
  phrases: string,
};

const Layout = ({ children,handleOpenPhrases,isPhraseOpen,phrases }: Props) => {
  // console.log(children)
  return (
    <div className='layout'>
      <SideBar handleOpenPhrases={handleOpenPhrases}
        isPhraseOpen={isPhraseOpen}
        phrases={ phrases } />

      <div className='flex ml-[250px]'>
        <Header />
        <main className='w-full'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
