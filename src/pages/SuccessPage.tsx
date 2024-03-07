import React, { useEffect, useState } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../../utils/createClient";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";


const SuccessPage = () => {
	const [user, setUser] = useState({});
	const navigate = useNavigate();

	async function logOutUser() {
		const { error } = await supabase.auth.signOut();
		navigate("/");
	}

	// メールからリンクに飛んだor最初のrender時に一回実行
	useEffect(() => {
		// get the user current logged in
		async function getUserData() {
			await supabase.auth.getUser()
				.then((data) => {
					console.log(data)
					//そもそもdata.dataがundifinedであったら、usegetすらするな、useプロパティがあるなら、setしてくれ
					if (data.data?.user) {
						setUser(data.data.user);
					}
				})
		}
		getUserData();
	}, []);

	return (
		<div>
			{console.log(user)}
			{/* userオブジェクトがあるかどうかチェック */}
			{Object.keys(user).length !== 0 ?
				<>
					<div>
						<h1>you're logged in</h1>
						<Button onClick={()=>{navigate("/chatpage")}} >chatへ </Button>
						<Button onClick={logOutUser} >logout </Button>
					</div>
				</>
				:
				<>
					<div>
						<h1>User is not logged in</h1>
						<Button onClick={() => { navigate("/") }} >Go back home </Button>
					</div>
				</>
			}
		</div>
	)
}

export default SuccessPage
