import React, { useContext } from 'react'
import { RegisterContext } from '../RegisterAllForm'
import { data } from '../../../Languages/French/Data'
import './style.scss'

const RegisterNavBar = () => {
    const {levelState , setLevelState} = useContext(RegisterContext)

    const handleClick = (e) =>{
      if(e.currentTarget.id === 'reg-nav1'){
        setLevelState(0)
      }else{
        setLevelState(1)
      }
    }
  return (
    <div className={levelState === 0? 'reg-nav reg-nav-1' : 'reg-nav reg-nav-2'}>
        <div id='reg-nav1' onClick={(e) => handleClick(e)}>
            {/*left*/}
            {data.register.first.title}
        </div>
        <div id='reg-nav2' onClick={(e) => handleClick(e)}>
            {/*right*/}
            {data.register.second.title}
        </div>
    </div>
  )
}

export default RegisterNavBar