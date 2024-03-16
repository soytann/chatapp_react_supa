import { useEffect, useState } from 'react'
import { Input } from 'react-daisyui'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
// import { insertMessages } from '../../utils/supabaseFunctions';
import { supabase } from '../../utils/createClient';

type Props = {
	handleOpenPhrases: ()=> void,
	insertMessages: () => void,
	setInput: () =>any,
	input:string,
		
}

const InputMessage = ({ handleOpenPhrases,insertMessages,setInput,input }: Props) => {
	// const [input, setInput] = useState("");
	// const [userID, setUserID] = useState("");

	// const insertMessages = async (e: any) => {
	// 	e.preventDefault();
	// 	try {
	// 		await supabase
	// 			.from("messages")
	// 			.insert({
	// 				"text": input,
	// 				"icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5qgVuKR3wnGlBHRL64GbAU6sAnNHq-lAHw&usqp=CAU",
	// 				"channel": "realtime-channel",
	// 				"uid": userID,
	// 			});
	// 		console.log(userID);
	// 		setInput("");

	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }



	// useEffect(() => {
	// 	// const { data } = supabase.auth.getUser()
	// 	// if (data.user !== null) {
	// 	// 	setUserID(data.user.id)
	// 	// }
	// 	const fetchUserID = async () => {
	// 		try {
	// 			const { data } = await supabase.auth.getUser();
	// 			// console.log(data.user.id)
	// 			setUserID(data.user.id)
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};
	// 	fetchUserID();
	// 	console.log(userID)
	// }, []);

	return (
		<div>
			<div className="flex lg p-4 gap-2 font-sans fixed bottom-0 items-center w-screen ">
				<AddRoundedIcon
					onClick={
						handleOpenPhrases}
					className='cursor-pointer' />
				<form onSubmit={insertMessages}>
					<Input
						onChange={(e) => { setInput(e.target.value) }}
						className='w-auto'
						placeholder='message'
						value={input} />
					{console.log(input)}
				</form>
				<SendRoundedIcon onClick={insertMessages}></SendRoundedIcon>
			</div>
		</div>
	)
}

export default InputMessage
