import React from 'react';
import './style.scss';
import FormatedLogo from '../FormatedLogo/FormatedLogo';

const footerLeftLinks = [
  {
    icon: {
      link: '',
      img: 'bxl-whatsapp.svg (1).png',
    },
    text: [
      {
        link: '',
        value: '+(237) 657 841 880',
      },
      {
        link: '',
        value: '+(237) 6XX XXX XXX',
      },
    ],
  },
  {
    icon: {
      link: '',
      img: 'bx-at.svg.png',
    },
    text: [
      {
        link: '',
        value: 'papsrowan@gmail.com',
      },
    ],
  },
  {
    icon: {
      link: '',
      img: 'bxl-facebook.svg.png',
    },
    text: [
      {
        link: '',
        value: 'Paps’diff Officiel',
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left">
        <div className="green-bg"></div>
        <img className="im1" src="whatsapp_2-sixteen_nine-removebg-preview 1.png" alt='img2'/>
        <img className="im2" src="logo.png" alt='img5'/>
        <div>
          <FormatedLogo fontSize="3rem" text1={"PAPS'"} text2={'DIFF'} color1={'white'} color2={'#FF5D00'} />
          <p
            style={{
              fontSize: '0.9rem',
              color: 'white',
              marginTop: -10,
              width: 250
            }}
          >
            Vous rapprocher encore plus.
          </p>
        </div>
      </div>
      <div className="right">
        <div>
          {footerLeftLinks.map((el, i) => {
            return (
              <div key={i} className="footerLeftLink">
                <div>
                  <img src={el.icon.img} alt='img8'/>
                </div>
                <div>
                  {el.text.map((ell, j) => {
                    return <p key={`${i} - ${j}`}>{ell.value}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <p>Copyright 2022 - Paps’diff - All rights reserved.</p>
       
      </div>
      <img className='absolute-image' src="image158.png" alt='img9'/>
      <div className='button-up'><a href="#up"><img src="bxs-send.svg.png" alt="" /></a></div>
    </div>
  );
};

export default Footer;
