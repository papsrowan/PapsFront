import React, { useContext, useEffect, useState } from 'react'
import { RegisterContext } from '../RegisterAllForm/RegisterAllForm'
import { data } from '../../Languages/French/Data'


const ErrMessage = ({name}) => {
    const {formState} = useContext(RegisterContext)
    const [isDisplayed, setIsDisplayed] = useState(false)
    useEffect(() => {
        switch(name){
            case 'name' :
                
                break
            case 'facebookLink': 
                break
            case 'email':
                break
            case 'website':
                break
            case 'whatsapp':
                break
            case 'contact':
                break
            case 'password':
                
                break
            case 'password2':
                break
            default:
                break
        }
    }, )
    
  return (
    <div>{data.register.err[name]}</div>
  )
}

export default ErrMessage