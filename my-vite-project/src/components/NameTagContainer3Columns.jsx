import React from 'react'
import { NameTag } from './NameTag'

export const NameTagContainer3Columns = (props) => {
  return (
    <div className='three-column'>
      {NameTagMaker(props.data)}
    </div>
  )
}

const NameTagMaker = (peopleData) => {
    const nameTags= peopleData.map(personData=>
      <div>
        <NameTag personData={personData}></NameTag>
      </div>
    )
    return nameTags
}