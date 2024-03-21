import React,{ ReactNode } from 'react'
import Header from './Header';
import SideBar from "./SideBar"


type Props = {
  children: ReactNode
  handleOpenPhrases: (isOpen: boolean) => void; //書き直す
  isPhraseOpen: any //書き直す
  phrases: string,

  handleSearchPhrases: (e: React.FormEvent<HTMLFormElement>) => void; // handleSearchPhrases の型を追加
  searchPhrases: string;
  results: string[];
  handleChangeSearchPhrases: (e: React.ChangeEvent<HTMLInputElement>) => void; // handleChangeSearchPhrases の型を追加
  handleUsePhrase: any;
  input: string,
  setInput:()=>void,

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
