import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import './style.scss';

const BroadCast = () => {
  return (
    <div className="broadcast-page">
      <NavBar />
      <div className="broadcast-first">
        <div className="leftttt">
          <div>
            <span>Pap's</span>
            <span>Diffusion</span>
            <p>Faisons simple et offrez vous la diffusion que vous souhaité.</p>
          </div>
          <div>
            <div>
              <img src="path2 (1).png" alt="" className='fleche' />
            </div>
            <span className='left-facture'>
              Facturation actuelle (<span>FCFA</span>)
            </span>
            <span className='left-montant'>
              0000.0
            </span>
          </div>
          <div className='containe-details'>
            <p className='left-asavoir'>A Savoir...</p>
            <ol className='left-details'>
              <li>Veuillez remplir vos informations qui doivent être diffuser sur WhatsApp dans le formulaire à droite.</li>
              <li>Tapez sur une bulle pour pouvoir saisir votre reponse. </li>
              <li>Tâchez de rester très professionel et explicit dans vos reponses.</li>
              <li>Vous êtes facturé en fonction du nombre personne que vous aimerez toucher.</li>
            </ol>
          </div>
        </div>
        <div className='container-right'>
          <div className='header-right'>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <img src="Ellipse17.png" alt="" />
              <p>
                <span>Paps’diff</span>
                <br />
                <span>online</span>
              </p>
            </div>
            <div className='container-icons'>
              <img src="bx-phone.svg.png" alt="telephone" className='header-icons' />
              <img src="bxl-facebook.svg (1).png" alt="facebook" className='header-icons' />
            </div>
          </div>
          <div className="big-container-right">
            <div className='container-body'>
              <div className='container-one'>
                <div>
                  <p>
                    <img src="bx-lock-alt.svg.png" alt="" />
                    Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ce chat ne peut les lire ou avoir accès.
                  </p>
                </div>
              </div>
              <div className='container-two'>
                <p className='para-fist'>
                  Salut <span className='name'>@joelfah</span>
                </p >
                <p className='para-snd'>Svp, bien vouloir fournir les informations suivantes.</p>
              </div>


              <form className='container-form'> 
                <div className='block-input'>
                  <div>
                    <img src="Group394.png" alt="" />
                  </div>
                  <div className='input-container'>
                    <input type="text" placeholder='Nom de l’entreprise.' />
                    <p>0/100</p>
                  </div>
                </div>
                <div className='block-input'>
                  <div>
                    <img src="Group394.png" alt="" />
                  </div>
                  <div className='input-container'>
                    <input type="text" placeholder='Nombre de personnes à qui diffuser votre annonce.' />
                    <p>Nombre uniquement (Ex. 2000, 9847). Max = 10000</p>
                  </div>
                </div>
                <div className='block-input'>
                  <div>
                    <img src="Group394.png" alt="" />
                  </div>
                  <div className='container-categories'>
                    <p>Catégorie de personnes à toucher.</p>
                    <div className='categories'>
                      <div className='icon-texte'>
                        <img src="Group390.png" alt="" />
                        <p>Hommes</p>
                      </div>
                      <div className='icon-texte'>
                        <img src="Group388.png" alt="" />
                        <p>Femmes</p>
                      </div>
                      <div className='icon-texte'>
                        <img src="Group387.png" alt="" />
                        <p>Tous</p>
                      </div>
                    </div>
                    <p>Choisissez une seule categories</p>
                  </div>
                </div>
                <div className='block-input'>
                  <div>
                    <img src="Group394.png" alt="" />
                  </div>
                  <div className='container-categories'>
                    <p>Tranche d’âge des personnes ciblées.</p>
                    <div className='input-age'>
                      ---18-------------60---
                    </div>
                    <p>Vous pouvez deplacer les deux extremités pour choisir le min et le max.</p>
                  </div>
                </div>
                <div className='section-image'>
                  <div>
                    <img src="Group394.png" alt="" />
                  </div>
                  <div className='container-image'>
                    <div className='block-addImage'>
                      <div className='block-iconText'>
                        <img src="bxs-file-image.svg.png" alt="" />
                        <span>Deposez votre image ici.</span>
                      </div>
                      <input type='file' className='button-addImage' placeholder='Ajouter une image'/>
                    </div>
                    <div className='block-imageDetails'>
                      <span>Laisser vide si vous ne voulez pas diffuser avec une image</span>
                      <span>PNG - JPG - TIFF - JPEG - <span>15MB</span> (<span>15360 KB</span>)</span>
                    </div>
                  </div>
                </div>
                <div className='section-message'>
                  <div>
                    <img src="Group394.png" alt="" />
                  </div>
                  <div className='block-message'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae et nisi nam quos praesentium repudiandae ad qui ipsa. Quaerat quas veritatis voluptatem incidunt, minima corrupti cum voluptates quidem necessitatibus id!
                  </div>
                </div>
                </form>

                
            </div>
            <div></div>
          </div>
          <div className='section-envoie'>
            <div className='block-confidentiel'>
              <input type="checkbox" name="" id="" />
              <p>J’accepte les <span>termes d’utilisation</span> et de <span>confidentialité</span>.</p>
            </div>
            <img src="Line 2.png" alt="" />
            <div className='block-tarif'>
              Total
              <span>0000.0</span>
              <img src="Vector.png" alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className='section-statistique'>
        <div className='statistique-title'>
          Historique de diffusion
        </div>
        <div className='block_statistique-details'>
          <div className='statistique-people'>
            <div className='block-chiffre'>
              <span>50,000</span>
              <span>Personnes atteintes</span>
            </div>
            <div className='block-image'>
              <img src="image 170.png" alt="" />
            </div>
          </div>
          <div className='statistique-braodcast'>
            <div className='block-chiffre'>
              <span>25</span>
              <span>Diffusions faites</span>
            </div>
            <div className='block-image'>
              <img src="image 1.png" alt="" />
            </div>
          </div>
          <div className='statistique-visibility'>
            <div className='block-chiffre'>
              <span>63.2%</span>
              <span>Taux de visibilité</span>
            </div>
            <div className='block-image'>
              <img src="image 171.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='section-filtre'>
        <div className='filtre-recherche'>
          <input type="text" name="" id="" placeholder="Qu'est-ce que vous cherchez ? " />
          <div className='filtre-icon'>
            <img src="Vector (1).png" alt="" />
          </div>
        </div>
        <div className='block-filtre'>
          <span>Filtres:</span>
          <ul className='filtre-periode'>
            <li>Cette semaine</li>
            <li>Ce mois</li>
            <li>&lt;= 5000 personnes</li>
            <li>&lt;= 10000 personnes</li>
          </ul>
        </div>
      </div>

      <div className='section-historique'>
        <div className='historique-pages'>
          Montrant 1 - 9 sur 50
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Suivant <img src="Vector (2).png" alt="" /></li>
          </ul>
        </div>
        <table className='historique-table'>
          <tr className='historique-titres'>
            <th>##</th>
            <th>Date de la diffusion</th>
            <th>Image</th>
            <th>Personnes touchées</th>
            <th>Vues</th>
            <th>Montant (XAF)</th>
          </tr>
          <tr className='historique-diffusion'>
            <td>9</td>
            <td>dd/mm/yyyy - hh:mm</td>
            <td>/media/images/...</td>
            <td>####</td>
            <td>##</td>
            <td>####.#</td>
          </tr>
          <tr className='historique-diffusion'>
            <td>8</td>
            <td>dd/mm/yyyy - hh:mm</td>
            <td>/media/images/...</td>
            <td>####</td>
            <td>##</td>
            <td>####.#</td>
          </tr>
          <tr className='historique-diffusion'>
            <td>7</td>
            <td>dd/mm/yyyy - hh:mm</td>
            <td>/media/images/...</td>
            <td>####</td>
            <td>##</td>
            <td>####.#</td>
          </tr>
          <tr className='historique-diffusion'>
            <td>6</td>
            <td>dd/mm/yyyy - hh:mm</td>
            <td>/media/images/...</td>
            <td>####</td>
            <td>##</td>
            <td>####.#</td>
          </tr>
          <tr className='historique-diffusion'>
            <td>5</td>
            <td>dd/mm/yyyy - hh:mm</td>
            <td>/media/images/...</td>
            <td>####</td>
            <td>##</td>
            <td>####.#</td>
          </tr>
          <tr className='historique-diffusion'>
            <td>4</td>
            <td>dd/mm/yyyy - hh:mm</td>
            <td>/media/images/...</td>
            <td>####</td>
            <td>##</td>
            <td>####.#</td>
          </tr>
          <tr className='historique-diffusion'>
            <td>3</td>
            <td>dd/mm/yyyy - hh:mm</td>
            <td>/media/images/...</td>
            <td>####</td>
            <td>##</td>
            <td>####.#</td>
          </tr>
          <tr className='historique-diffusion'>
            <td>2</td>
            <td>dd/mm/yyyy - hh:mm</td>
            <td>/media/images/...</td>
            <td>####</td>
            <td>##</td>
            <td>####.#</td>
          </tr>
          <tr className='historique-diffusion'>
            <td>1</td>
            <td>dd/mm/yyyy - hh:mm</td>
            <td>/media/images/...</td>
            <td>####</td>
            <td>##</td>
            <td>####.#</td>
          </tr>
        </table>
      </div>

      <div className='section-button'>
        <button> <img src="Vector (3).png" alt="" /> Feuille Excel</button>
        <button> <img src="Vector (4).png" alt="" />Télécharger PDF</button>
      </div>
      <Footer />
    </div>
  );
};

export default BroadCast;

// export const InfoMessage = () => {
//   return (
//     <div>

//     </div>
//   )
// }
