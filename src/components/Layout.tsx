import React,{ ReactNode } from 'react'
import Header from './Header';
import SideBar from "./SideBar"
import IconMenu from './IconMenu';


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

const Layout = (props: Props) => {
  // console.log(children)
  return (

    <div className='layout'>


        <IconMenu />

      <SideBar
        {...props}
      />


      <div className='flex ml-[290px] px-2'>
        <Header />
        <main className='w-full my-20 px-2'>
          {props.children}

        </main>
      </div>
    </div>
  )
}

export default Layout
