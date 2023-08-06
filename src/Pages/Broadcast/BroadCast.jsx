import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './style.scss';

const BroadCast = () => {
  return (
    <div className="broadcast-page">
      <NavBar />
      <div className="broadcast-first">
        <div className="left">
          <div>
            <span>Pap's</span>
            <span>Diffusion</span>
            <p>Faisons simple et offrons vous la diffusion que vous souhaité.</p>
          </div>
          <div>
            <div>
              fleche
            </div>
            <span>
              Facturation actuelle (<span>FCFA</span>)
            </span>
            <span>
              0000.0
            </span>
          </div>
          <div>
            <p>A Savoir...</p>
            <ul>
              <li>Veuillez remplir vos informations qui doivent être diffuser sur WhatsApp dans le formulaire à droite.</li>
              <li>Tapez sur une bulle pour pouvoir saisir votre reponse. </li>
              <li>Tâchez de rester très professionel et explicit dans vos reponses.</li>
              <li>Vous êtes facturé en fonction du nombre personne que vous aimerez toucher.</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div>
            <img src="Ellipse17.png" alt="" />
            <p>
              <span>Paps’diff</span>
              <br />
              <span>online</span>
            </p>
            <div>
              <img src="bx-phone.svg.png" alt="" />
              <img src="bxl-facebook.svg (1).png" alt="" />
            </div>
          </div>
          <div>
            <p>
              <img src="bx-lock-alt.svg.png" alt="" />
              Les messages et les appels sont chiffrés de bout en bout. Personne en dehors de ce chat ne peut les lire ou avoir accès.
            </p>
            <p>
              Salut <span>@joelfah</span>
            </p>
            <p>Svp, bien vouloir fournir les informations suivantes.</p>
            <div>
              <div>
                <img src="Group394.png" alt="" />
              </div>
              <div>
                <div className="arrow"></div>
                <label>Nom de l’entreprise.</label>
                <input type="text" />
                <p>0/100</p>
              </div>
            </div>
            <div>
              <div>
                <img src="Group394.png" alt="" />
              </div>
              <div>
                <label>Nombre de personnes à qui diffuser votre annonce.</label>
                <input type="text" />
                <p>Nombre uniquement (Ex. 2000, 9847). Max = 10000</p>
              </div>
            </div>
            <div>
              <div>
                <img src="Group394.png" alt="" />
              </div>
              <div>
                <p>Catégorie de personnes à toucher.</p>
                <div>
                  <img src="Group390.png" alt="" />
                  <p>Hommes</p>
                </div>
                <div>
                  <img src="Group388.png" alt="" />
                  <p>Femmes</p>
                </div>
                <div>
                  <img src="Group387.png" alt="" />
                  <p>Tous</p>
                </div>
                <p>Nombre uniquement (Ex. 2000, 9847). Max = 10000</p>
              </div>
            </div>
            <div>
              <div>
                <img src="Group394.png" alt="" />
              </div>
              <div>
                <p>Tranche d’âge des personnes ciblées.</p>

                <p>Vous pouvez deplacer les deux extremités pour choisir le min et le max.</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
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
