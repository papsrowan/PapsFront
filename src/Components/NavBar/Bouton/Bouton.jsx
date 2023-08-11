import React from 'react'
import { useNavigate } from 'react-router-dom'

const Bouton = ({text , link , filled , onClick}) => {
    const navigate = useNavigate()
  return (
    <button className={filled ? 'button-filled' : 'button-no-filled'} onClick={e => {
      if(onClick){
        onClick(e)
      }
      navigate(link)
    }}>{text}</button>
  )
}

export default Bouton