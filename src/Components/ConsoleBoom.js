import React, { useEffect, useState } from 'react'

const ConsoleBoom = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("BOOOOM !!!!")
    })

  return (
    <div>
        <button onClick={() => setCount(count+1)}>increment</button>
        
        <p>Count No {count}</p>
    </div>
  )
}

export default ConsoleBoom