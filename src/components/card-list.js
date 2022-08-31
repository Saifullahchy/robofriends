import React from 'react'
import Card from './card'

const CardList = ({robots}) => {
  return (
    <div>
       {robots.map((item, key) => {
           return <Card key={key} id={robots[key].id} name={robots[key].name} email={robots[key].email} />
       })}
    </div>
  )
}

export default CardList