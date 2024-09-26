import React from 'react'

export const NameTag = (props) => {
  return (
    <>
    <div className='user-card flex' >        
        <div>
            <img src={props.personData.avatar} alt={props.personData['first_name']}></img>
        </div>
        <div>
            <div>
                <b>{props.personData['first_name']+' '+props.personData['last_name']}</b>
            </div>
            <div>
                {props.personData.email}
            </div>
            
        </div>
    </div>
    </>
  )
}