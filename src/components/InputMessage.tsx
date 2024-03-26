import { useEffect, useState } from 'react'
import { Input,Textarea} from 'react-daisyui'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
// import { insertMessages } from '../../utils/supabaseFunctions';
import { supabase } from '../../utils/createClient';
import {translator} from "../../utils/deepl"

type Props = {
	handleOpenPhrases: ()=> void,
	insertMessages: () => void,
	setInput: () =>any,
	input:string,
		
}

const InputMessage = ({ handleOpenPhrases,insertMessages,setInput,input }: Props) => {
	// const [input, setInput] = useState("");
	// const [userID, setUserID] = useState("");
  const [translatedText, setTranslatedText ] = useState<string>("")
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

	function handleTranslate() {
		try {
			console.log(input)
			translator(input)
				.then(res => setInput(res.text))
		} catch (error) {
			console.log("翻訳エラーです")
		}
	}

	console.log(input)
	console.log(translatedText)


	return (
		<div>
			<div className="flex bg-white lg p-2 gap-2 font-sans fixed bottom-0 items-center ">
				<AddRoundedIcon
					onClick={
						handleOpenPhrases}
					className='cursor-pointer' />
				<form onSubmit={insertMessages}>
					<Textarea
						onChange={(e) => { setInput(e.target.value) }}
						className='resize-none relative  h-16 w-full sm:w-64  md:w-96'
						placeholder='message'
						value={input} />
					{console.log(input)}
				</form>
				<TranslateRoundedIcon
					className='cursor-pointer'
					onClick={handleTranslate} />
				<SendRoundedIcon

					className='cursor-pointer {input.length===0 ? disabled:enabled}'
					onClick={insertMessages}></SendRoundedIcon>
			</div>
		</div>
	)
}

export default InputMessage
