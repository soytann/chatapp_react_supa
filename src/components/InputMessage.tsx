import { useEffect, useState } from 'react'
import { Input } from 'react-daisyui'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
// import { insertMessages } from '../../utils/supabaseFunctions';
import { supabase } from '../../utils/createClient';

const InputMessage = () => {
	const [input, setInput] = useState("");
	const [userID, setUserID] = useState("");

	const insertMessages = async (e: any) => {
		e.preventDefault();



		try {
			await supabase
				.from("messages")
				.insert({
					"text": input,
					"icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5qgVuKR3wnGlBHRL64GbAU6sAnNHq-lAHw&usqp=CAU",
					"channel": "realtime-channel",
					"uid":userID,
				});
			console.log(userID);
			setInput("");

		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		// const { data } = supabase.auth.getUser()
		// if (data.user !== null) {
		// 	setUserID(data.user.id)
		// }
		const fetchUserID = async () => {
			try {
				const { data } = await supabase.auth.getUser();
				// console.log(data.user.id)
				setUserID(data.user.id)
			} catch (error) {
				console.error(error);
			}
		};
		fetchUserID();
		console.log(userID)
	}, []);

	return (
		<div>
			<div className="flex lg component-preview p-4 items-center justify-center gap-2 font-sans fixed bottom-0 w-full ">
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
