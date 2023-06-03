import React from 'react'
import { ChangeProfile } from './ChangeProfile'
import { useContext } from 'react'
import { AppContext } from '../App'
export const Profile = () => {

  const {username,setUsername}= useContext(AppContext);
  
  return (
    <>
    <div>Profile: {username}</div>
    <ChangeProfile />
    </>
  )
}
