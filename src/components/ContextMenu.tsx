import React from 'react'
import { Menu } from 'react-daisyui'
import { TranslateRounded } from '@mui/icons-material'
import { DeleteForeverRounded } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const ContextMenu = ({ points }) => {
  const navigate = useNavigate();

  // function contextMenu(e: React.MouseEvent<HTMLElement>) {
  //   e.preventDefault();
  //   console.log(e.targetElement)
  // }
  console.log(points)
  return (
    <>
      <div
        style={{ top: points.y-70, left:points.x-300}}
        className= "absolute z-10 opacity-90"
      >

      <Menu size="sm"
        className='bg-gray-200 p-0 rounded-md'>
        <Menu.Item >
            <a
              onClick={navigate("/translate")}>翻訳</a>
        </Menu.Item>
        <Menu.Item>
          <a >削除</a>
        </Menu.Item>
      </Menu>
    </div >
</>
  )
}

export default ContextMenu
