import React from 'react'
import { useNavigate } from 'react-router-dom'

const Bouton = ({text , link , filled}) => {
    const navigate = useNavigate()
  return (
    <button className={filled ? 'button-filled' : 'button-no-filled'} onClick={e => navigate(link)}>{text}</button>
  )
}

export default Bouton