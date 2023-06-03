import React, { useState } from 'react'

export const ChangeProfile = (props) => {
  const [update, set] = useState("");
  return (
    <div>
      <input onChange={(e) => set(e.target.value)}  />
      <button onClick={()=> props.setUsername(update) }>update</button>
    </div>
  )
}
