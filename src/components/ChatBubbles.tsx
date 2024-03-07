import React, { useEffect, useState } from 'react'
import { ChatBubble, } from 'react-daisyui'
// import { supabase } from '../../utils/createClient'
import { getMessages, } from '../../utils/supabaseFunctions'
import { supabase } from '../../utils/createClient'


const ChatBubbles = () => {
	const [messages, setMessages] = useState<any>([]);
	const [inputText, setInputText] = useState("");


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
	const getRealtimeMessages = async () => {

		try {
			await supabase.
				channel("realtime_channel") //任意のチャンネル名
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
							//     //payloadに新しくinsertされた情報のオブジェクトをDestructuringで変数に代入
							//     const { id, created_at, text, icon, uid, channel } = payload.new
							//     setInputText((inputText) => [...inputText])
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





	useEffect(() => {
		(async () => {
			try {
				const fetchedMessages = await getMessages();
				setMessages(fetchedMessages);
			} catch (error) {
				console.error("errorrr", error);
			};
		})();
		getRealtimeMessages();
			console.log("リアルタイムできてます")
	}, []);

	return (
		<>

			<div className=''>
				{console.log(messages)}
				{messages.map((message) => (
					<div key={message.id}>
						{message.id}
						<ChatBubble>
							<ChatBubble.Avatar src={message.icon} />
							<ChatBubble.Message>
								{message.text}
							</ChatBubble.Message>
							<ChatBubble.Footer className='text-xs'>{message.created_at.slice(11, 16)}</ChatBubble.Footer>
						</ChatBubble>
					</div>
				))}
				<ChatBubble>
					<ChatBubble.Avatar src="data:image/png;base64,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
				" />
					<ChatBubble.Message>今から行くよ</ChatBubble.Message>
					<ChatBubble.Footer>Delivered</ChatBubble.Footer>
				</ChatBubble>
				<ChatBubble end>
					<ChatBubble.Avatar src="data:image/jpeg;base64,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" />
					<ChatBubble.Message>おけ</ChatBubble.Message>
					<ChatBubble.Footer>Seen at 12:46</ChatBubble.Footer>
				</ChatBubble>
			</div>
		</>
	)
}

export default ChatBubbles


