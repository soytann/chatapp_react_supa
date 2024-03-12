import React from 'react'
import { ReactNode } from 'react'
import Header from './Header';
import SideBar from "./SideBar"
type Props = {
  children: ReactNode
};

const Layout = ({children} : Props) => {
  return (
    <div>
      <Header />
      <SideBar/>
      {children}
    </div>
  )
}

export default Layout
