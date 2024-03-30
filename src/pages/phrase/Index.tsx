import React from 'react'
import PhraseCard from '../../components/PhraseCard'
import Header from '../../components/Header'
import { Button } from 'react-daisyui'
import { useNavigate } from 'react-router-dom';
import { Input } from 'react-daisyui';


const Index = ({ phrases,searchPhrases,handleChangeSearchPhrases,results }) => {
  const navigate = useNavigate();
  return (
    
    <div>
        <div className=' ml-8 w-full max-w-xs flex justify-between '>
        <Input
          value={searchPhrases}
          onChange={handleChangeSearchPhrases}
          size='sm'
            placeholder='Search Phrases' />
       
        <Button
          onClick={() => { navigate("/addphrases") }}
          className='' size='sm' color='primary'>Add Phrase</Button>
         </div>

      <div className='fixed  h-screen top-32 overflow-auto px-1 pb-32 text-xl'>
        <PhraseCard

          phrases={phrases} />
      </div>
    </div>
  )
}

export default Index
