import React, { useState } from 'react'
import { Avatar, FileInput, Input,Button } from 'react-daisyui'
import { TextField } from '@mui/material'
import { supabase } from '../../utils/createClient'

type Props = {
  user: any,
}

const Profile = ({ user }) => {
  const [profile, setProfile] = useState({
    name: "",
    email: user.email,
    iconUrl: "https://knsoza1.com/wp-content/uploads/2020/07/22f1fc28980b598b3c74962091c245ac.png"
  })

  // ファイルが選択されたときに実行されるイベントハンドラ
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // 選択されたファイルを取得
    const reader = new FileReader(); // FileReaderオブジェクトを作成

    // ファイルの読み込みが完了したときに実行されるイベントハンドラ
    reader.onloadend = () => {
      // 読み込んだ画像データをAvatarコンポーネントに反映
      setProfile({
        ...profile,
        iconUrl: reader.result // 読み込んだ画像データをiconUrlにセット
      });
    };

    // ファイルの読み込みを開始
    reader.readAsDataURL(file);
  };

  // メールアドレスが変更されたときに実行されるイベントハンドラ
  const handleEmailChange = (event) => {
    setProfile({
      ...profile,
      email: event.target.value // 入力された値をemailにセット
    });
  };
//nameが変更されるときのイベントハンドラ
  const handleNameChange = (event) => {
    setProfile({
      ...profile,
      name: event.target.value // name
    });
  };



  const handleSubmitProfile = async (e: any) => {
    e.preventDefault();
    if(Object.keys == 0){
    try {
      await supabase
        .from("profiles")
        .insert([
          {
            name: profile.name,
            email: profile.email,
            photoUrl: profile.iconUrl,
            learningLanguage: "japanese",
            displayLanguage: "english",
            //   color:
          }
        ]);


    } catch (error) {
      console.error("profileエラー",error);
    }
  }
  }

  return (
    <div className='bg-white shadow w-4/5 h-96 rounded-md p-4 m-auto  '>
      <form action=""
        onSubmit={handleSubmitProfile}>
        <Avatar shape='circle' src={profile.iconUrl} />

        <FileInput size="xs" onChange={handleFileChange} />

        <Input size='sm' className='border-transparent mt-4' value={profile.name} onChange={handleNameChange}
          placeholder='Put your name' />
        <Input size='sm' className='border-transparent mt-2' value={profile.email} onChange={handleEmailChange} />


      <div className="text-center mt-28">
        <Button className="ml-1/2" size='sm' type="submit">SAVE</Button>
        </div>
        </form>
    </div>
  )
}

export default Profile
