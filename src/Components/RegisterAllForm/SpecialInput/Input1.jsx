import React, { useContext } from 'react';
import './Input1.scss';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { RegisterContext } from '../RegisterAllForm';
// import ErrMessage from '../../errMessage/errMessage';

const Input1 = ({ className, type, name, placeholder, onChange, value, icon }) => {
  const { isPasswordVisible, setIsPasswordVisible } = useContext(RegisterContext);
  const handleClick = e => {
    setIsPasswordVisible(prev => !prev);
  };
  return (
    <div className={'input-1 ' + className}>
      <div className="input-1-icons">{icon}</div>
      <input
        type={name !== 'password' ? type : isPasswordVisible ? 'text' : 'password'}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {name === 'password' && (
        <div className="input-1-icons" onClick={handleClick}>
          {isPasswordVisible ? <BsEye /> : <BsEyeSlash />}
        </div>
      )}
      {/* <ErrMessage name = {name}/> */}
    </div>
  );
};

export default Input1;
