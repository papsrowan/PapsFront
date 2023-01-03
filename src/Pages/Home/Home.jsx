import React, { createContext, useRef, useState } from 'react';
import './Home.scss';
import NavBar from '../../Components/NavBar/NavBar';
import FormatedLogo from '../../Components/FormatedLogo/FormatedLogo';
import { data } from '../../Languages/French/Data';
import Bouton from '../../Components/NavBar/Bouton/Bouton';
import CircleIconNum from './CircleIconNum/CircleIconNum';
import Textarea from './Textarea/Textarea';
import { RiImageAddFill } from 'react-icons/ri';
import Tags from '../../Components/Tags/Tags';
export const homeContext = createContext();
const Home = () => {
  const [broadcastFormState, setBroadcastFormState] = useState({
    peoples: 1,
    text: '',
    file: '',
  });
  const fileRef = useRef(null);
  // const [formState, setFormState] = useState({

  // })
  return (
    <homeContext.Provider value={{ broadcastFormState, setBroadcastFormState }}>
      <div className="home">
        <NavBar />
        <div className="green-rectangle" />
        <div className="home-first">
          <div className="home-first-left">
            <FormatedLogo text1={`PAPS'`} text2={`DIFF`} fontSize={'50px'} color1={'#006735'} color2={'#FF5D00'} />
            <p dangerouslySetInnerHTML={{ __html: data.home.first.left.main }}></p>
            <Bouton text={data.home.first.left.button.text} link={data.home.first.left.button.link} filled={true} />
            <img src="img3.svg" alt="img3" />
          </div>

          <div className="home-first-right">
            <p className="header" dangerouslySetInnerHTML={{ __html: data.home.first.right.head }}></p>
            <div className="main">
              <div className="main-header">
                {data.home.first.right.peoples.map(el => {
                  return <CircleIconNum key={el} value={el} />;
                })}
              </div>
              <Textarea className="main-main" />
              <div className="main-footer">
                <div className="button-main-footer" onClick={e => fileRef.current.click()}>
                  <RiImageAddFill />
                  <div>Image</div>
                </div>
                <div>
                  <p>PNG / JPG / JPEG ~ 10MB</p>
                </div>
              </div>
              <input type="file" ref={fileRef} name="file" className="file-none" />
            </div>
            <div className="footer">
              <Bouton text={data.home.first.right.form.foot.leftButton.text} link={data.home.first.right.form.foot.leftButton.link} />
              <Bouton
                text={data.home.first.right.form.foot.rightButton.text}
                link={data.home.first.right.form.foot.rightButton.link}
                filled={true}
              />
            </div>
          </div>
        </div>
        <div className="home-second">
          <div className="left">
            <img className="icon" src="im1.svg" alt="logo1" />
            <div className="head">
              <FormatedLogo
                text1={data.home.second.left.head.left[0]}
                fontSIze={'30px'}
                color1={'#006735'}
                color2={'#FF5D00'}
                text2={data.home.second.left.head.left[1]}
              />
              <span className="head-span-2">{data.home.second.left.head.right}</span>...
            </div>
            <div className="main" dangerouslySetInnerHTML={{ __html: data.home.second.left.main }} />
            <Bouton text={data.home.second.left.button} filled={true} link="#" />
          </div>
          <div className="right">
            <img src="papsLogoBlack.svg" alt="logo2" />
          </div>
        </div>
        <div className="home-third">
          <div className="left">
            <img src="img4.svg" alt="img4" />
          </div>
          <div className="right">
            <img src='img6.svg' alt='img6'/>
            <p>{data.home.third.text}</p>
          </div>
          <Tags
            color1={'#FF5D0026'}
            color2={'#af400080'}
            fontColor2={'#ffe3d3'}
            fontColor1={'#FF5D00'}
            text={data.home.third.tags[0]}
            x={'25px'}
            y={'700px'}
          />
          <Tags
            color1={'#0F9D5826'}
            color2={'#0a6b3cb8'}
            fontColor1={'#006735'}
            fontColor2={'#b5ffdb'}
            text={data.home.third.tags[1]}
            x={'350px'}
            y={'620px'}
          />
          <Tags
            color1={'#0F9D5826'}
            color2={'#08502daf'}
            fontColor1={'#006735'}
            fontColor2={'#bcffdf'}
            text={data.home.third.tags[2]}
            x={'600px'}
            y={'150px'}
          />
          <Tags
            color1={'#FF5D0026'}
            color2={'#af400080'}
            fontColor2={'#ffe3d3'}
            fontColor1={'#FF5D00'}
            text={data.home.third.tags[3]}
            x={'1000px'}
            y={'300px'}
          />
          <img className='cotes' src='img5.svg' alt='cotes' />
        </div>

        <div className="fourth">
          <div className="left"></div>
          <div className="right">
            <img src='img7.svg' alt='img7'/>
          </div>
        </div>
      </div>
    </homeContext.Provider>
  );
};

export default Home;
