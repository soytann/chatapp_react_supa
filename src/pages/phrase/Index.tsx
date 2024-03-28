import React from 'react'
import PhraseCard from '../../components/PhraseCard'
import Header from '../../components/Header'
import { Button } from 'react-daisyui'
import { useNavigate } from 'react-router-dom';
import {Input} from 'react-daisyui';
const Index = ({ phrases }) => {
  const navigate = useNavigate();
  return (
    <div>
        <div className=' mt-[80px] ml-8 w-full max-w-xs '>
        <Input
          size='sm'
            placeholder='Search Phrases' />
        </div>
        <Button
          onClick={() => { navigate("/addphrases") }}
          className='fixed right-2 top-20' size='sm' color='primary'>Add</Button>

      <div className='fixed  h-screen top-32 overflow-auto px-1 pb-32 text-xl'>
        <PhraseCard
          phrases={phrases} />
      </div>
    </div>
  )
}

export default Index
