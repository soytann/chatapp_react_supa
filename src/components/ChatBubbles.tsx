import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ChatBubble, } from 'react-daisyui'
// import { supabase } from '../../utils/createClient'
import { getMessages, } from '../../utils/supabaseFunctions'
import { supabase } from '../../utils/createClient'
import { Auth } from '@supabase/auth-ui-react'
import { TranslateRounded } from '@mui/icons-material'
import { translator } from '../../utils/deepl'
import ContextMenu from './ContextMenu'

type Props = {
	user: string,
	handleClosePhrases: any,
}

const ChatBubbles = ({ user, handleClosePhrases }: Props) => {
	const [messages, setMessages] = useState<any>([]);
	const [translatedText, setTranslatedText] = useState<string>("")
	const [clicked, setClicked] = useState(false)
	const [points, setPoints] = useState({
		x: 0,
		y: 0,
	})
	const endRef = useRef();

	// ----この書き方は、promiseオブジェクト（pending)で返ってくる------
	// useEffect(() => {
	// 	try {
	// 		const fetchedMessages = getMessages();
	// 		setMessages(fetchedMessages);
	// 		console.log(fetchedMessages);
	// 	} catch (error) {
	// 		console.error("errorrr")
	// 	}
	// },[]);
	//----------------------------------------------------------------


	//Realtime設定
	// ？？？？？この場合awaitは有効じゃないらしい。なぜ？
	const getRealtimeMessages = () => {
		try {
			supabase
				.channel("realtime_channel") //任意のチャンネル名
				.on(
					"postgres_changes", //固定
					{
						event: "*",
						schema: "public",
						table: "messages",
					},
					(payload) => {
						console.log(payload);
						//データの登録
						if (payload.eventType === "INSERT") {
							//payloadに新しく追加
							const newMessage = payload.new;
							setMessages((prevMessages) => [newMessage, ...prevMessages]);
						}
					}
				)
				.subscribe();

			//リスナー購読解除
			return () => supabase.channel("realtime_channel").unsubscribe()
		} catch (error) {
			console.error(error);
		}
	};




	const callbackMessage = useCallback(() => {
		(async () => {
			try {
				const fetchedMessages = await getMessages();

				setMessages(fetchedMessages);
			} catch (error) {
				console.error("errorrrだよ", error);
			};
		})();
		getRealtimeMessages();
	}, [messages]);

useEffect(()=>{
	callbackMessage()
},[callbackMessage])

	function handleDisplayMenu() {

	}

	function handleTranslate(message) {
		console.log(message.text)
		translator(message.text)
			.then(res => setTranslatedText(res.text))


	}

	useEffect(() => {
		const handleClick = () => setClicked(false);
		console.log(clicked)
		window.addEventListener("click", handleClick);
		return () => {
			window.removeEventListener("click", handleClick);
		};
	}, []);

	useEffect(() => {
		// refがnullの時はスキップ
		if (endRef.current) {
			endRef.current.scrollIntoView();
		}
	});

	return (
		<>
			<div className=''
				onClick={handleClosePhrases}>
				{clicked && (
					// <div
					// 	// className={`absolute top-[${points.y}px] left-[${points.x}px] z-10 opacity-90`}
					// >
					<ContextMenu points={points} />
					// </div>
				)}
				<div style={{ maxHeight: '70%', overflowY: 'scroll' }}>

					{messages.map((message) => (
						<div key={message.id}>
							{user.id === message.uid ?
								<ChatBubble end>
									<ChatBubble.Message
										onContextMenu={(e) => {
											e.preventDefault();
											setClicked(true);
											setPoints({
												x: e.pageX,
												y: e.pageY,
											})
											console.log("コンテキストメニュー", points.x, points.y)
											console.log(e)
										}}>
										{message.text}
									</ChatBubble.Message>
									<ChatBubble.Footer> {message.created_at.slice(11, 16)} </ChatBubble.Footer>
								</ChatBubble>
								:
								<ChatBubble>
									<ChatBubble.Avatar src={message.icon} />
									<div className='flex'>
										<ChatBubble.Message
											onMouseOver={handleDisplayMenu}
											onContextMenu={(e) => {
												e.preventDefault();
												setClicked(true);
												setPoints({
													x: e.pageX,
													y: e.pageY,
												})
												console.log("コンテキストメニュー", points.x, points.y)
												console.log(e)
											}}>
											{message.text}
											{/* <ChatBubble.Footer className='text-xs'>{message.uid}</ChatBubble.Footer> */}
										</ChatBubble.Message>

										<div className=''>
											<TranslateRounded
												fontSize=""
												className=''
												onClick={() => {
													console.log(message)
													handleTranslate(message)
												}}
												key={message.id}
												state={message.text}
											/>
										</div>
									</div>
									<ChatBubble.Footer className='text-xs'>{message.created_at.slice(11, 16)}</ChatBubble.Footer>


								</ChatBubble>


							}
						</div>
					))}
				</div>
				<div ref={endRef}></div>
			</div>
		</>
	)
}

export default ChatBubbles

// "data:image/png;base64,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
// "
