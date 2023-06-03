import React, { useState } from 'react'
import { useContext } from 'react';
import { AppContext } from '../App';

export const ChangeProfile = (props) => {
  const {setUsername}= useContext(AppContext);
  const [update, set] = useState("");
  return (
    <div>
      <input onChange={(e) => set(e.target.value)}  />
      <button onClick={()=> setUsername(update) }>update</button>
    </div>
  )
}
