import React from 'react'
import { Navbar, Menu, Button } from 'react-daisyui'
const Header = () => {
  return (
    <div>
      <div className='fixed top-0 left-[250px] w-full bg-white bg-opacity-95 z-10'>


        <Navbar >
          <div className=''>
            <div className="flex-1">
              <Button tag="a" color="ghost" className="normal-case text-xl">
                Phrase
              </Button>
            </div>
            <div className="flex-none">
              <Menu horizontal={true} className="px-1">
                <Menu.Item>
                  <a></a>
                </Menu.Item>
                <Menu.Item>
                  <details>
                    <summary>Setting</summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a>Link 1</a>
                      </li>
                      <li>
                        <a>Link 2</a>
                      </li>
                    </ul>
                  </details>
                </Menu.Item>
              </Menu>
            </div>
          </div>
        </Navbar>


      </div>

    </div>
  )
}

export default Header
