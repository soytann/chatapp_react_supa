import React from 'react'
import { Button } from 'react-daisyui'
import { Input, Select, Option, Textarea, } from '@material-tailwind/react';
import { useState } from 'react';
import { supabase } from '../../utils/createClient';
import { useNavigate } from 'react-router-dom';

const SavePhrase = () => {
  const [phrase, setPhrase] = useState<string>("");
  const [meaning, setMeaning] = useState<string>("");
  const [category, setCategory] = useState<any>("");
  const [label, setLabel] = useState<any>("");
  const [memo, setMemo] = useState("");
  const [history, setHistory] = useState("");
  const navigate = useNavigate();

  // function handleClickAddPhrase() {


  // }

  const insertPhrases = async (e: any) => {
		e.preventDefault();
		try {
			await supabase
				.from("phrases")
        .insert([
          {
					phrase: phrase,
					meaning: meaning,
          category: category,
          memo: memo,
          history: history,
					uid:"a75de1dc-39aa-44d1-87a3-6a06f43c6ef1",
          }
        ]);
			// console.log(userID);
      setPhrase("");
      console.log("フレーズ", phrase)
      console.log("意味", meaning)
      console.log("カテゴリ", category)
      console.log("ラベル", label)
      console.log("メモ", memo)
      console.log("履歴", history)
      navigate("/phrase-index")

		} catch (error) {
			console.error(error);
		}
	}

  return (
    <div>
      <div className='mt-20 p-4 bg-gray-100 h-[684px] rounded-xl mx-6 ' >

        <form action=""
          onSubmit={insertPhrases}>
          <div className=" w-full p-4 font-sans">
            <p className='font-bold'>Phrase</p>
            <Input
              onChange={e => setPhrase(e.target.value)}
              className='w-full'
              placeholder='Hello' />
          </div>
          <div className=" w-full p-4 font-sans">
            <p className='font-bold'>Meaning</p>
            <Input
              onChange={e => setMeaning(e.target.value)}
              className='w-full'
              placeholder='こんにちは' />
          </div>
          <div className='md:flex gap-1'>
            <div className=" w-2/3 p-4 font-sans">
              <p className='font-bold'>Category</p>

              <Select

                name="category"
                value={category}
                onChange={(e: any) => {
                  setCategory(e);
                }}
              >
                <Option value="あいさつ">あいさつ</Option>
                <Option value="意見">意見</Option>
                <Option value="感謝">感謝</Option>
                <Option value="褒める">褒める</Option>
                <Option value="カジュアル">カジュアル</Option>
              </Select>
            </div>
            <div className=" w-2/3 p-4  font-sans">
              <p className='font-bold'>Label</p>
              <Select
                multiple={true}
                name="label"
                value={label}
                className='bg-opacity-40'
                onChange={(e: any) => {
                  setLabel(e)
                }}>
                <Option value="purple"><p className='bg-purple-300 rounded-[50%] text-xs'>　</p></Option>
                <Option value={"blue"}>blue <p className='bg-blue-300 rounded-[50%] text-xs'>　</p> </Option>
                <Option value={"yellow"}><p className='bg-yellow-300 rounded-[50%] text-xs'>　</p></Option>
                <Option value={"red"}><p className='bg-red-300 rounded-[50%] text-xs'>　</p></Option>
                <Option value={"green"}><p className='bg-green-300 rounded-[50%] text-xs'>　</p></Option>
              </Select>
            </div>
          </div>
          <div className=" w-full p-4 py-2 font-sans">
            <p className='font-bold'>Memo</p>
            <Textarea
              onChange={e => setMemo(e.target.value)}
              className='w-full' />
          </div>
          <div className=" w-full p-4 py-2 font-sans">
            <p className='font-bold'>History</p>
            <Textarea
              className='w-full' 
              onChange={e => setHistory(e.target.value)}/>
          </div>
        </form>

        <div className='text-center mt-4'>
          <Button
            onClick={insertPhrases}
            className="bg-white" color="info" size='md'>SAVE</Button>
        </div>


      </div>
    </div>
  )
}

export default SavePhrase
