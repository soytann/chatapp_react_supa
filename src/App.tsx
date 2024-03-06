import "./App.css";
import { supabase } from "../utils/createClient";
import { useEffect, useState } from "react";
import { getAllUsers } from "../utils/supabaseFunctions"
import LoginPage from "./pages/LoginPage";
import SuccessPage from "./pages/SuccessPage";
import { Img } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage"


function App() {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await getAllUsers()
      setUsers(users);
      console.log(users);
    }
    getUsers();
  },[])
	return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}
          />
          <Route path="/success" element={<SuccessPage />}
          />
          <Route path="/chatpage" element={<ChatPage/>} />
        </Routes>
      </BrowserRouter>
		</>
	);
}

export default App;
