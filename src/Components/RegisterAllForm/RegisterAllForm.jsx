import React, { createContext, useState } from 'react';
import { BiBuildings, BiDoorOpen, BiLockOpenAlt, BiLockAlt } from 'react-icons/bi';
import { TfiFacebook } from 'react-icons/tfi';
import { SiMaildotru } from 'react-icons/si';
import { TbWorld } from 'react-icons/tb';
import { ImWhatsapp } from 'react-icons/im';
import { FaPhoneAlt } from 'react-icons/fa';
import { TbChecks } from 'react-icons/tb';
import './RegisterAllForm.scss';
import { data } from '../../Languages/French/Data';
import RegisterNavBar from './RegisterNavBar/RegisterNavBar';
import RegisterForm from './RegisterForm/RegisterForm';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const RegisterContext = createContext(null);

const RegisterAllForm = ({ login }) => {
  const [formState, setFormState] = useState({
    name: '',
    facebookLink: '',
    email: '',
    website: '',
    whatsapp: '',
    contact: '',
    password: '',
    password2: '',
  });
  const [formErrCode, setFormErrCode] = useState({
    name: 0,
    facebookLink: 0,
    email: 0,
    website: 0,
    whatsapp: 0,
    contact: 0,
    password: 0,
    password2: 0,
  });
  const [levelState, setLevelState] = useState(0);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleChange = e => {
    setFormState(prev => {
      //obj est un objet tempo qui garde la precedente valeur de l'etat du formulaire
      let obj = { ...prev };
      obj[e.target.name] = e.target.value;
      return obj;
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    //verification to implement here
    if(login){
      if(formState)
      axios.post('http://192.168.19.241:9000/user/login',{
        email : formState.email,
        password : formState.password
      }).then(res => {

      }).catch(err => {
        console.log(err)
      })
    }else{

    }
    console.log(formState);
  };

  const inputs1 = [
    {
      className: 'complete-input',
      type: 'text',
      name: 'name',
      placeholder: data.register.first.form.inputsPlaceholders.name,
      value: formState.name,
      icon: <BiBuildings />,
    },
    {
      className: 'complete-input',
      type: 'email',
      name: 'email',
      placeholder: data.register.first.form.inputsPlaceholders.email,
      value: formState.email,
      icon: <SiMaildotru />,
    },
    {
      className: 'semi-input',
      type: 'password',
      name: 'password',
      placeholder: data.register.first.form.inputsPlaceholders.password,
      value: formState.password,
      icon: <BiLockOpenAlt />,
    },
    {
      className: 'semi-input',
      type: 'password',
      name: 'password2',
      placeholder: data.register.first.form.inputsPlaceholders.password2,
      value: formState.password2,
      icon: <BiLockAlt />,
    },
  ];

  const inputs2 = [
    {
      className: 'complete-input',
      type: 'url',
      name: 'facebookLink',
      placeholder: data.register.second.form.inputsPlaceholders.facebookLink,
      value: formState.facebookLink,
      icon: <TfiFacebook />,
    },
    {
      className: 'complete-input',
      type: 'url',
      name: 'website',
      placeholder: data.register.second.form.inputsPlaceholders.website,
      value: formState.website,
      icon: <TbWorld />,
    },
    {
      className: 'semi-input',
      type: 'tel',
      name: 'whatsapp',
      placeholder: data.register.second.form.inputsPlaceholders.whatsapp,
      value: formState.whatsapp,
      icon: <ImWhatsapp />,
    },
    {
      className: 'semi-input',
      type: 'tel',
      name: 'contact',
      placeholder: data.register.second.form.inputsPlaceholders.contact,
      value: formState.contact,
      icon: <FaPhoneAlt />,
    },
  ];

  const inputs3 = [
    {
      className: 'complete-input',
      type: 'email',
      name: 'email',
      placeholder: data.register.first.form.inputsPlaceholders.email,
      value: formState.email,
      icon: <SiMaildotru />,
    },
    {
      className: 'complete-input',
      type: 'password',
      name: 'password',
      placeholder: data.register.first.form.inputsPlaceholders.password,
      value: formState.password,
      icon: <BiLockOpenAlt />,
    },
  ];
  return (
    <RegisterContext.Provider
      value={{ formState, setFormState, levelState, setLevelState, setIsPasswordVisible, isPasswordVisible, formErrCode, setFormErrCode }}
    >
      <div className="register-form">
        <div className="first">
          {/*Left side  */}
          <img src="path0img1.png" alt="pdlogo1" />
          <div className="papdiff-egerie">
            <div className='head'>
              PAPS’<span>DIFF</span>
            </div>
            <p>Vous rapprocher encore plus.</p>
          </div>
          <img src="image159.png" alt="sender" />
        </div>
        <div className="second">
          {/* right side 
            si on a l'attribut login passé en parametres, tout change
          */}
          {login ? (
            <form className="register-all-form" onSubmit={handleSubmit}>
              <RegisterForm
                title={data.login.form.head}
                inputs={inputs3}
                handleChange={handleChange}
                submitIcon={<BiDoorOpen />}
                type={0}
                submitText={data.login.form.submit}
              />
            </form>
          ) : (
            <>
              <form className="register-all-form" onSubmit={handleSubmit}>
                {levelState === 0 ? (
                  <RegisterForm
                    title={data.register.first.form.head}
                    inputs={inputs1}
                    handleChange={handleChange}
                    submitIcon={<TbChecks />}
                    type={0}
                    submitText={data.register.first.form.submit}
                  />
                ) : (
                  <RegisterForm
                    type={1}
                    title={data.register.second.form.head}
                    inputs={inputs2}
                    handleChange={handleChange}
                    submitIcon={<BiDoorOpen />}
                    submitText={data.register.second.form.submit}
                  />
                )}
              </form>
              <RegisterNavBar />
            </>
          )}

          <div id="register-form-footer">
            <p>
              {login ? data.login.form.footer.left.text : data.registerAll.footer.left.text}
              <Link to={login ?'../register' :"../login"}>{login ?data.login.form.footer.left.link : data.registerAll.footer.left.link}</Link>
            </p>
            <p>
              {data.registerAll.footer.right.text}
              <Link to="../acceuil">{data.registerAll.footer.right.link}</Link>
            </p>
          </div>
        </div>
      </div>
    </RegisterContext.Provider>
  );
};

export default RegisterAllForm;
