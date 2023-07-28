import React from 'react'
// import data from './data.json'
import Card from './Card'
import './Cards.css'

export default function Cards({FinalData}) {
    
  return (
    <div className='CardSection'>
      <Card CardData={FinalData}/>
    </div>
  )
}
