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
import { getPhrases } from './../utils/supabaseFunctions'
import Layout from "./components/Layout";
import { fetchSearchedPhrases } from "../utils/supabaseFunctions";
import Profile from "./components/Profile";
import TranslateMessage from "./components/TranslateMessage ";



function App() {
  const [users, setUsers] = useState<any>([]);
  const [user, setUser] = useState({});
  const [phrases, setPhrases] = useState<any>([]); //PhraseCardからお引越し
  const [isPhraseOpen, setIsPhraseOpen] = useState(false);

  // const useResultContext = createContext();
  const [searchPhrases, setSearchPhrases] = useState(''); //sidebar
  const [results, setResults] = useState<any>([]); //sidebar
  const [input, setInput] = useState("");
	const [userID, setUserID] = useState("");



  // useEffect(() => {
  //   const getUsers = async () => {
  //     const users = await getAllUsers()
  //     setUsers(users);
  //     console.log(users);
  //   }
  //   getUsers();
  // }, [])

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

  //PhraseCardからお引越し
  useEffect(() => {
    (async () => {
      try {
        const fetchedPhrases = await getPhrases();
        setPhrases(fetchedPhrases);
      } catch (error) {
        console.error("フレーズ取れてないよ", error);
      };
    })();

    console.log("phraseできてます", phrases)
  }, [phrases]);


  function handleOpenPhrases(){
    setIsPhraseOpen(true);
    console.log(isPhraseOpen)
  }
  function handleClosePhrases(){
    setIsPhraseOpen(false)
  }


  //SideBarからお引越し、resultsをuseContextでグローバル管理
  function handleChangeSearchPhrases(e) {
    setSearchPhrases(e.target.value)
}
//SideBarからお引越し
  // function handleUsePhrase() {
  //   console.log("useしたい")
  //   console.log(results)
  //   results.map((result) => {
  //     console.log(result)
  //   })

  // }

//SideBarからお引越し
  async function handleSearchPhrases(e) {
    e.preventDefault();
    try {
      handleOpenPhrases(true);
      console.log(searchPhrases)
      const searchedResults = await fetchSearchedPhrases(searchPhrases)
      setResults(searchedResults);
      console.log(results)
      results.map((result) => {
        console.log(result)
      })
      // results.forEach(result => {
      //   console.log(result)

      // });
      for (let i = 0; i < results.length; i++){
        
      }

    } catch (error) {
      console.error("検索できてません", error)

    }
  }

  // InputMessageからお引越し


	const insertMessages = async (e: any) => {
		e.preventDefault();
		try {
			await supabase
				.from("messages")
				.insert({
					"text": input,
					"icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTHHaN-Lx3wi7rL5u2Bwg-NVf7opArrYBfD4reWe_GvQb64kVqTRDWnxw6rO7L6xkEfY&usqp=CAU",
					"channel": "realtime-channel",
					"uid": userID,
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
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage
            user={user} />}
          />

          <Route path="/success" element={<Layout><SuccessPage user={user} /></Layout>} />

          {/* <useResultContext.Provider> */}
          <Route path="/chatpage" element={<Layout
            isPhraseOpen={isPhraseOpen}
            phrases={phrases}
            handleOpenPhrases={handleOpenPhrases}
            handleSearchPhrases={handleSearchPhrases}
            searchPhrases={searchPhrases}
            results={results}
            handleChangeSearchPhrases={handleChangeSearchPhrases}
            // handleUsePhrase={handleUsePhrase}
            input={input}
            setInput={setInput}
          ><ChatPage
              user={user}
              handleOpenPhrases={handleOpenPhrases}
              handleClosePhrases={handleClosePhrases}
              results={results}
              insertMessages={insertMessages}
              setInput={setInput}
              input={input}
              /></Layout>} />
          {/* </useResultContext.Provider> */}

          <Route path="/profilepage" element={<Layout><ProfilePage /></Layout>} />
          <Route path="/phrase-index" element={<Layout><Index phrases={phrases} searchPhrases={searchPhrases} handleChangeSearchPhrases={handleChangeSearchPhrases} results={results} /></Layout>} />
          <Route path="/addphrases" element={<Layout><AddPhrases /></Layout>} />
          <Route path="/details" element={<Layout><DetailPage phrases={phrases} setPhrases={ setPhrases} /></Layout>} />
          <Route path="/profile" element={<Layout><Profile user={user} /></Layout>} />
          <Route path="/translate" element={<Layout><TranslateMessage phrases={phrases} /></Layout>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
