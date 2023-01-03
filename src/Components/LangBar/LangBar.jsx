import React from 'react'
import './LangBar.scss'
const LangBar = () => {
  return (
    <div className='lang-bar'>
        <button className='lang-button lang-white' ><img src='us-flag.png' alt='us'/><p>US</p></button>
        <button className='lang-button lang-white'><img src='fr-flag.png' alt='fr'/><p>FR</p></button>
    </div>
  )
}

export default LangBar