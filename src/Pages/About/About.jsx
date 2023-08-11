import React from 'react'
import './About.scss'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import FormatedLogo from '../../Components/FormatedLogo/FormatedLogo'
const ChiffreContaine = [
  {
    icon: 'Vector (5).png',
    nombre: '100+',
    titre: 'Clients satisfaits',
    couleur: '#0F9D58'
  },
  {
    icon: 'Vector (6).png',
    nombre: '100k+',
    titre: 'Diffusion faites',
    couleur: '#ED683C'
  },
  {
    icon: 'bx-buildings.svg.png',
    nombre: '50+',
    titre: 'Entreprises enregistrés',
    couleur: '#212121'
  },
  {
    icon: 'Vector (7).png',
    nombre: '500k+',
    titre: 'Heures de travail',
    couleur: '#CD7949'
  }
]

const equipeImages = [
  {
    icon: 'dashe 1.png',
    texte: 'Community managers'
  },
  {
    icon: 'dashe 1 (1).png',
    texte: 'Développeurs'
  },
  {
    icon: 'dashe 1 (2).png',
    texte: 'Designers'
  },
]
const About = () => {
  return (
    <div className='container-about'>
      <NavBar />

      <div className='section-story'>
        <div className='block-left'>
          <div className='block-titre'>
            <span className='titre'>il était une fois ...</span>
            <span><FormatedLogo text1={"Paps'"} text2={'story'} color1={'#006735'} color2={'#FF5D00'} fontSize={'4em'} /></span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Eget cras arcu vehicula velit nec id proin nulla elementum. Id purus ipsum malesuada aliquam. Risus amet sed hendrerit mattis. Duis ultricies et mus et faucibus eget vel ac. Lacinia condimentum nunc facilisi etiam donec tempor sit vitae integer. Amet nunc aliquam a pharetra in eget viverra urna lacus. Viverra blandit commodo pharetra.
            Lorem ipsum dolor sit amet consectetur. Eget cras arcu vehicula velit nec id proin nulla elementum. Id purus ipsum malesuada aliquam. Risus amet sed hendrerit mattis. Duis ultricies et mus et faucibus eget vel ac. Lacinia condimentum nunc facilisi etiam donec tempor sit vitae integer. Amet nunc aliquam a pharetra in eget viverra urna lacus. Viverra blandit commodo pharetra.
          </p>
        </div>
        <div className='block-right'>
          <img src="image2vector (19) 1.png" alt="" />
        </div>
      </div>

      <div className='section-objectifs'>
        <div className='block-button'>
          <button>Aperçu</button>
          <button>Vision & Mission</button>
          <button>Gallerie</button>
        </div>
        <div className='snd-block'>
          <div className='block-details'>
            <div className='block-titres'>
              <span>
                Lore Ipsum Title 1
              </span>
              <span>
                Lore Ipsum Subtitle 1
              </span>
            </div>
            <div className='block-image'>
              <img src="image 160.png" alt="" />
            </div>
          </div>
          <div className='block-texte'>
            <p>Lorem Lorem ipsum, dolor  ipsum, dolor sit amet consectetur adipisicing elit. Enim reiciendis rerum, at reprehenderit expedita fugit consequuntur et nisi voluptatibus, similique optio distinctio quas molestias quibusdam proviLorem Lorem ipsum, dolor  ipsum, dolor sit amet consectetur adipisicing elit. Enim reiciendis rerum, at reprehenderit expedita fugit consequuntur et nisi voluptatibus, similique optio distinctio quas molestias quibusdam provisit amet consectetur adipisicing elit. Enim reiciendis rerum, at reprehenderit expedita fugit consequuntur et nisi voluptatibus, similique optio distinctio quas molestias quibusdam provident alias. Neque, consequuntur nihil.ipsum dolor sit amet consectetur. Suscipit interdum faucibus diam tellus consequat id semper eget urna. Nulla molestie pharetra pellentesque ultrices quam tortor suscipit ut adipiscing. Convallis risus maecenas diam arcu. Mauris molestie consectetur egestas mattis mattis egestas. Ipsum pulvinar eget orci faucibus morbi enim. Consequat platea in etiam etiam lectus. Vel aliquet rhoncus mauris eu facilisi. Adipiscing eget rhoncus gravida pellentesque ut vestibulum nisl hendrerit. Eu varius fermentum mattis sem integer vulputate ut ac. Posuere vitae pulvinar viverra consequat tellus. Adipiscing gravida est vitae ante est sem viverra pharetra rutrum. Sagittis enim vestibulum volutpat aliquet. Fringilla lorem integer morbi pretium tempor. Facilisis sed justo morbi cursus dignissim cras. Lectus ornare in elit dignissim dui eu vulputate augue. Aliquet ut et nisl fringilla urna dictumst. Cras dictum diam leo ultricies faucibus. Amet faucibus scelerisque arcu ac neque habitant. Massa a viverra morbi metus sit at cursus adipiscing. Ac maecenas aliquam egestas quis nibh non luctus. Consectetur quis id diam quis mauris rutrum enim risus. Cras gravida a quam diam massa et. Faucibus facilisis malesuada ante vulputate dui viverra mus porttitor sed. Scelerisque ut vitae facilisis mollis pellentesque etiam tincidunt duis tellus. Cras cras eu facilisis accumsan euismod risus egestas. Amet amet tortor eget neque id ultrices commodo tortor justo. Euismod hac volutpat sagittis sit aliquet nunc nulla. A cras dui et pellentesque mi. Massa augue ullamcorper sit faucibus et arcu condimentum. Lectus tristique ut ultricies tincidunt dignissim egestas bibendum. Faucibus rhoncus id amet gravida turpis a ornare ultrices adipiscing. Praesent non at laoreet cras sed. Non enim platea cursus proin quis at augue. Morbi enim tempus fermentum amet ultrices amet volutpat. Duis varius eget sed integer fringilla aliquet.</p>
          </div>
        </div>
      </div>

      <div className='section-realisations'>
        <h1>
          Les <span>chiffres</span> parlent d’eux mêmes !
        </h1>
        <div className='block-details'>
          {ChiffreContaine.map(elt => <Chiffres icon={elt.icon} nombre={elt.nombre} titre={elt.titre} couleur={elt.couleur}/>)}
        </div>
      </div>

      <div className='section-equipe'>
        <p>
        Toute une <span>équipe</span> à votre disposition juste pour votre <span>satisfaction</span>.
        </p>
        <div className='block-image'>
            {equipeImages.map(elt => <Images texte={elt.texte} icon={elt.icon}/>)}
        </div>
      </div>

      <Footer/>
    </div>
  )
}

const Chiffres = ({ icon, nombre, titre, couleur }) => {
  return (
    <>
      <div className='container-details'>
        <div className='block-image' style={{
          backgroundColor: couleur,
        }}>
          <img src={icon} alt="" />
        </div>
        <div className='block-chiffre'>
          <span>{nombre}</span>
          <span>{titre}</span>
        </div>
      </div>
    </>
  );
  };
  const Images = ({texte, icon}) =>{
    return(
          <>
          <div className='image-details'>
            <img src={icon} alt="" />
            <span>{texte}</span>
          </div>
          </>
    );
  }
export default About