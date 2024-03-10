import React from 'react'
import PhraseDetails from '../../components/PhraseDetails'
import Header from '../../components/Header'

const DetailsPage = ({phrases}) => {
  return (
    <div>
      <Header />
      <PhraseDetails
      phrases={phrases}/>
    </div>
  )
}

export default DetailsPage
