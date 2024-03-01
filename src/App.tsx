import "./App.css";
import { supabase } from "../utils/createClient";
import { useEffect, useState } from "react";
import {getAllUsers} from "../utils/supabaseFunctions"

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
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
		</>
	);
}

export default App;
