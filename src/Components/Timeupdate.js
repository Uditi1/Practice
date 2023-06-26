import React, { useEffect, useState } from 'react'

const Timeupdate = () => {

const [date, setDate] = useState(new Date())

useEffect(() => {
    setInterval(() => {
        setDate(new Date())
    },1000)
},[]);

  return (
    <div>{date.toString()}</div>
  )
}

export default Timeupdate