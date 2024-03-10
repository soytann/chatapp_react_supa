import React from 'react'
import PhraseCard from '../../components/PhraseCard'
import Header from '../../components/Header'
import Button from '@mui/icons-material/AddCircleOutlineRounded';


const Index = ({ phrases }) => {
  
  return (
    <div>
      <Header />
      <PhraseCard
        phrases={phrases} />
    </div>
  )
}

export default Index
