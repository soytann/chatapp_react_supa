import "./App.css";
import { supabase } from "../utils/createClient";
import { useEffect, useState } from "react";
import { getAllUsers } from "../utils/supabaseFunctions"
import LoginPage from "./pages/LoginPage";
import SuccessPage from "./pages/SuccessPage";
import { Img } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage"
import ProfilePage from "./pages/ProfilePage";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import Index from "./pages/phrase/Index";
import AddPhrases from "./pages/phrase/AddPhrases";
import DetailPage from "./pages/phrase/DetailPage";


function App() {
  const [users, setUsers] = useState<any>([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUsers = async () => {
      const users = await getAllUsers()
      setUsers(users);
      console.log(users);
    }
    getUsers();
  }, [])
  
	// メールからリンクに飛んだor最初のrender時に一回実行
	useEffect(() => {
		// get the user current logged in
		async function getUserData() {
			await supabase.auth.getUser()
				.then((data) => {
					console.log("GETユーザー：", data)
					//そもそもdata.dataがundifinedであったら、usegetすらするな、useプロパティがあるなら、setしてくれ
					if (data.data?.user) {
						setUser(data.data.user);
					}
				})
		}
    getUserData();
    console.log(user)
	}, []);


	return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}
          />
          <Route path="/success" element={<SuccessPage
            user={user}/>}
          />
          <Route path="/chatpage" element={<ChatPage
            user={user} />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/phrase-index" element={<Index />} />
          <Route path="/addphrases" element={<AddPhrases />} />
          <Route path="/details" element={<DetailPage />} />
          
        </Routes>
      </BrowserRouter>
		</>
	);
}

export default App;
