import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

export const Home = () => {

  const {username}= useContext(AppContext);
    
  return (
    <div>
       <h1>My name is :- {username} </h1>
    </div>
    
  )
}
