import React, { useContext } from 'react'
import { data } from '../../../Languages/French/Data'
import { homeContext } from '../Home'
import { BiMessageDetail } from 'react-icons/bi'
const Textarea = ({className}) => {
    const {broadcastFormState, setBroadcastFormState} = useContext(homeContext)
    const handleChange = e => {
        setBroadcastFormState(prev => {
            prev.text = e.target.value
            return {...prev}
        })
    }
  return (
    <div className={className}>
        <div className='head'>
            <p>{data.home.first.right.form.head}</p>
            <p>{broadcastFormState.text.length+'/500'}</p>
        </div>
        <div className='main-form'>
            <div className='main-form-logo'><BiMessageDetail/></div>
            <textarea maxLength={500} className='home-textarea' value={broadcastFormState.text} onChange={handleChange}>

            </textarea>
        </div>
    </div>
  )
}

export default Textarea