import React from 'react'
import { Menu,Navbar, Button, } from 'react-daisyui'

const Header = () => {
	return (
		<div className='fixed top-0'>


    <Navbar >
      <div className="flex-1">
        <Button tag="a" color="ghost" className="normal-case text-xl">
          daisyUI
        </Button>
      </div>
      <div className="flex-none">
        <Menu horizontal={true} className="px-1">
          <Menu.Item>
            <a>Link</a>
          </Menu.Item>
          <Menu.Item>
            <details>
              <summary>Parent</summary>
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
    </Navbar>


		</div>
	)
}

export default Header
