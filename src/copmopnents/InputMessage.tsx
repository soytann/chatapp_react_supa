import React, { useState } from 'react'
import { Input } from 'react-daisyui'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
// import { insertMessages } from '../../utils/supabaseFunctions';
import { supabase } from '../../utils/createClient';


const InputMessage = () => {
	const [input, setInput] = useState("");

	const insertMessages = async (e) => {
		e.preventDefault();
  const messages = await supabase
        .from("messages")
				.insert({
					"text": input,
					"icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5qgVuKR3wnGlBHRL64GbAU6sAnNHq-lAHw&usqp=CAU"
				});
		console.log(input);
		setInput("");
	}

	return (
		<div>
			<div className="flex lg component-preview p-4 items-center justify-center gap-2 font-sans">
				<AddRoundedIcon />
					<form onSubmit={insertMessages}>
					<Input
						onChange={(e) => { setInput(e.target.value) }}
						className='w-96'
						placeholder='message' />
						{console.log(input)}
				</form>
				<SendRoundedIcon onClick={insertMessages}></SendRoundedIcon>
			</div>
		</div>
	)
}

export default InputMessage
