import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-daisyui'
import { getSelectedPhrases } from '../../utils/supabaseFunctions'
import { Cottage } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'

const PhraseDetails = ({ phrases }) => {
  const [selectedPhrase, setSelectedPhrase] = useState<any>([]);
  const location = useLocation();
  console.log(location);
  let phraseID = location.state.id

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

  return (
    <>
      <div>
        <div className='mt-20 py-2 px-4 bg-gray-100 h-[684px] rounded-xl mx-6 ' >
          {selectedPhrase.map((selected) => (
            <>
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
              </div>f
            </>
          ))}
        </div>
      </div>

    </>
  )
}

export default PhraseDetails
