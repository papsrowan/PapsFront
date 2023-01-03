import React, { useContext } from 'react';
import { homeContext } from '../Home';
import { AiOutlineUser } from 'react-icons/ai';
const CircleIconNum = ({ value }) => {
  const { broadcastFormState, setBroadcastFormState } = useContext(homeContext);
  const handleClick = e => {
    setBroadcastFormState(prev => {
      prev.peoples = value;
      return { ...prev };
    });
  };
  return (
    <div
      className={
        broadcastFormState.peoples === value ? 'circle-icon-num circle-icon-num-filled' : 'circle-icon-num circle-icon-num-no-filled'
      }
      onClick={handleClick}
    >
      {value === 1 ? <AiOutlineUser /> : value + 'K'}
    </div>
  );
};

export default CircleIconNum;
