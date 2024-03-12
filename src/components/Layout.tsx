import React,{ ReactNode } from 'react'
import Header from './Header';
import SideBar from "./SideBar"


type Props = {
  children: ReactNode
};

const Layout = ({ children }: Props) => {
  console.log(children)
  return (
    <div className='layout'>
      <SideBar />

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
