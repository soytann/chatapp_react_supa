import React, { useEffect, useState } from 'react'
import { Collapse,Button } from 'react-daisyui'
import { getSelectedPhrases } from '../../utils/supabaseFunctions'
import { Cottage } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../utils/createClient'
import { getPhrases } from '../../utils/supabaseFunctions'

const PhraseDetails = ({ phrases,setPhrases }) => {
  const [selectedPhrase, setSelectedPhrase] = useState<any>([]);
  const location = useLocation();
  console.log(location);
  let phraseID = location.state.id
  const navigate = useNavigate();
  console.log(phraseID)


  useEffect(() => {
    (async () => {
      try {

        const fetchedIDMessages = await getSelectedPhrases(phraseID);
        setSelectedPhrase(fetchedIDMessages);
        console.log(selectedPhrase)
      } catch (error) {
        console.error("セレクトIDerrorrrだよ", error);
      };
    })();
    console.log("セレクトできた", selectedPhrase)
    // const { phrase, meaning } = selectedPhrase;


  }, []);

  function handleDeletePhrase() {
    supabase
      .from("phrases")
      .delete()
      .eq("id", phraseID)
      .then((res) => {
        console.log(res)
        confirm("このフレーズを削除します");
        setPhrases(res);

        navigate("/phrase-index", {state:phrases});
      })
      .catch((error) => {
      console.error("Error deleting phrase",error)
    })
    
  }
  function handleUpdatePhrase() {
    supabase
      .from("phrases")
      .update({phrase:phrase})
      .eq("id", phraseID)
      .then((res) => {
        console.log(res)
        confirm("このフレーズを削除します");
        setPhrases(res);

        navigate("/phrase-index", {state:phrases});
      })
      .catch((error) => {
      console.error("Error deleting phrase",error)
    })
    
  }

  return (
    <>
      <div>
        <div className='mt-20 py-2 px-4 bg-gray-100 h-[684px] rounded-xl mx-6 ' >
          {selectedPhrase.map((selected) => (
            <div key={phraseID}>
              <div>
                <p className='font-bold py-2 my-0'>Phrase</p>
                <div className='bg-white bg-opacity-80 p-4 h-auto shadow rounded-lg'>
                  <p className='font-semibold'>{selected.phrase}</p>
                </div>
              </div>
              <div>
                <p className='font-bold py-2 my-0'>Meaning</p>
                <div className='bg-white bg-opacity-80 p-4 h-auto shadow rounded-lg'>
                  <p className='font-semibold'>{ selected.meaning}</p>
                </div>
              </div>
              <div>
                <p className='font-bold py-2 my-0'>Category</p>
                <div className='bg-white bg-opacity-80 p-4 h-auto shadow rounded-lg'>
                  <p className='font-semibold'>{ selected.category}</p>
                </div>
              </div>
              <div>
                <p className='font-bold py-2 my-0'>Label</p>
                <div className='bg-white bg-opacity-80 p-4 h-auto shadow rounded-lg'>
                  <p className='font-semibold'>{ selected.label}</p>
                </div>
              </div>
              <div>
                <p className='font-bold py-2 my-0'>Memo</p>
                <div className='bg-white bg-opacity-80 p-4 h-auto shadow rounded-lg'>
                  <p className='font-semibold'>{ selected.memo}</p>
                </div>
              </div>
              <div>
                <p className='font-bold py-2 my-0'>History</p>
                <div className='bg-white bg-opacity-80 p-4 h-auto shadow rounded-lg'>
                  <p className='font-semibold'>{ selected.history}</p>
                </div>
              </div>
            </div>
          ))}
          <div
            onClick={handleUpdatePhrase}
            className='flex gap-2 my-20 text-justify'>
          <Button className='bg-blue-200' >Edit</Button>
            <Button
              onClick={handleDeletePhrase}
              className='bg-red-200'>Delete</Button>
          </div>

        </div>
      </div>

    </>
  )
}

export default PhraseDetails
