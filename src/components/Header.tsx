import React from 'react'
import { Navbar, Menu, Button } from 'react-daisyui'
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/createClient';
const Header = () => {
  const navigate = useNavigate();

  async function logOutUser() {
		const { error } = await supabase.auth.signOut();
		navigate("/");
	}
  return (
    <div>
      <div className='fixed top-0 bg-white bg-opacity-95 w-full z-10'>


        <Navbar >
          <div className='mr-10 flex justify-between'>
            <div className=" ">
              <Button tag="a" color="ghost" className="normal-case text-xl">
                
              </Button>
            </div>
            <div className="flex-none">
              <Menu horizontal={true} className="px-1">

                <Menu.Item className=''>
                  <details>
                    <summary>　　</summary>
                    <ul
                      onClick={logOutUser}
                      className="bg-base-100">
                      <li>
                        <a>Logout</a>
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
