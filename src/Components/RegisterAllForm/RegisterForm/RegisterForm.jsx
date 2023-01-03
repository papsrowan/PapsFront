import React, { useContext } from 'react';
import Input1 from '../SpecialInput/Input1';
import { RegisterContext } from '../RegisterAllForm';

const RegisterForm = ({ title, inputs , handleChange , submitIcon ,submitText , type}) => {
  //type = 0 si on est sur la premiere partie du formulaire et a 1 sinon
  const {formState , setLevelState} = useContext(RegisterContext)
  const handleCLick = e => {
    if(type === 0){
      setLevelState(1)
    }else{
      console.log(formState)
    }
  }

  return (
    <div className='reg-form-container'>
      <h2>{title}</h2>
      {inputs.map(el => {
        return (
          <Input1
            key={inputs.indexOf(el)}
            className={el.className}
            type={el.type}
            name={el.name}
            placeholder={el.placeholder}
            onChange={handleChange}
            value={el.value}
            icon={el.icon}
          />
        );
      })}
      <button type="button" onClick={handleCLick}>
        <icon>
          {submitIcon}
        </icon>
        {submitText}
      </button>
    </div>
  );
};

export default RegisterForm;
