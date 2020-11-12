import './juridique.css';
import React, { Component } from 'react'
import {Progression} from "../Profil/Profile";

// les components sont dans des constante pour pouvoir etre exporté
const Juridique = ()=>{
    return(
        <div>
            <div>
                <h2>ARTICLE 1 : Objet</h2>
            </div>
            <div>
                <p>Les présentes « conditions générales d'utilisation » ont pour objet l'encadrement juridique de l’utilisation du site www.les-fées-des-maths.fr et de ses services.
                    Ce contrat est conclu entre :
                    Le gérant du site internet, ci-après désigné « l’Éditeur »,
                    Toute personne physique ou morale souhaitant accéder au site et à ses services, ci-après appelé « l’Utilisateur ».
                    Les conditions générales d'utilisation doivent être acceptées par tout Utilisateur, et son accès au site vaut acceptation de ces conditions.</p>
            </div>

        </div>
    )
}

export default Juridique
