import { Menu } from "react-daisyui"
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useNavigate } from "react-router-dom";

const IconMenu = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen w-12 mx-0 fixed">
          <Menu className="bg-primary-900">
        <Menu.Item
          >
          <a
            onClick={()=>navigate("/chatpage")}
            className="px-1">
            <ChatBubbleOutlineRoundedIcon/>
        </a>
      </Menu.Item>
      <Menu.Item>
          <a
            onClick={()=>navigate("/phrase-index")}
            className="px-1">
<FormatQuoteOutlinedIcon/>
        </a>
      </Menu.Item>
      <Menu.Item>
          <a
            onClick={()=>navigate("/profile")}
            className="px-1">
<PersonOutlinedIcon/>
        </a>
      </Menu.Item>
    </Menu>


    </div>
  )
}

export default IconMenu
