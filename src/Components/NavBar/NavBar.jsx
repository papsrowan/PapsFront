import React from 'react';
import FormatedLogo from '../FormatedLogo/FormatedLogo';
import Button from './Button/Button';
import { data } from '../../Languages/French/Data';
import './style.scss';
import Bouton from './Bouton/Bouton';
const NavBar = () => {
  return (
    <nav className="main-nav-bar">
      <div className="left-nav-bar">
        <FormatedLogo text1={"PAPS'"} text2={'DIFF'} color1={'#0F9D58'} color2={'#FF5D00'} fontSize={'25px'} />
      </div>
      <div className="right-nav-bar">
        {data.navBar.links.map(el => {
          return <Button key={'nav-bar-link' + el.url + el.text} url={el.url} text={el.text} />;
        })}
        <button className='lang-button lang-orange'><img src='us-flag.png' alt='us'/><p>US</p></button>
        <button className='lang-button lang-orange'><img src='fr-flag.png' alt='fr'/><p>FR</p></button>
        <Bouton filled={true} text={data.navBar.connexion.text} link={data.navBar.connexion.url} />
      </div>
    </nav>
  );
};

export default NavBar;
