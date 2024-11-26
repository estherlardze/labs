import React from 'react'

const courseCard = ({icon, text}) => {
  return (
    <div>
        <img src={icon} alt={text + " icon"}/>
        <p>{text}</p>
    </div>
  )
}

export default courseCard