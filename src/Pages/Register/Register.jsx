import React from 'react';
import LangBar from '../../Components/LangBar/LangBar';
import RegisterAllForm from '../../Components/RegisterAllForm/RegisterAllForm';
import './Register.scss';
const Register = ({login}) => {
  return (
    <div className="register-all">
      <LangBar />
      <RegisterAllForm login = {login}/>
    </div>
  );
};

export default Register;
