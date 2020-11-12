import React, { Component } from 'react';
import './Home.css';
import cerf from '../../Images/cerf.jpg'
import loup from '../../Images/loup.jpg'
import panthere from '../../Images/panthere.jpg'
import mathe from '../../Images/math.jpg'
import hommeordi from '../../Images/hommeordi.jpg'
import ecriture from '../../Images/ecriture.jpg'

/*import { } from '../Components/Components'; // liste des components a import*/

class Home extends Component{
    render(){
        return(
            <div>
                <Carrousel/>
                <Txt/>
            </div>

        );
    }
} export default Home

export const Carrousel = () =>{
    // mettre du code js ici si besoin
    return(
        <div class="container">
        <div class="col-12">
            <div class="row justify-content-center">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={mathe} height="300px" alt="First slide"></img>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={ecriture} height="300px" alt="Second slide"></img>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={hommeordi} height="300px" alt="Third slide"/>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        </div>
    )
}

export const Txt = () =>{
    // mettre du code js ici si besoin
    return(
        <div class="container" id="grdcontainer">
        <div class="row" id="contenue">
            <div class="col-12" id="ligne" ><p>Bienvenue sur Fée des maths ! Sur ce site vous trouverez des cours sous format vidéo avec de nombreux quizz d’applications ainsi que des exercices avec corrections. Bienvenue dans le monde merveilleux des mathématiques ! Bonne visite et bons progrès !</p></div>
            <div class="col-5">Non ! Vous n’êtes pas nul en maths ! Si vos résultats vous font penser le contraire, beaucoup de professeurs l’affirment : personne n’est vraiment « nul » en mathématiques. Si vous pensez toujours le contraire, il faut comprendre que cette matière n’est faite que de logique. Et c’est cette dernière que vous devez apprendre à déchiffrer. Avec un peu de travail sur Fée des maths, vous parviendrez sûrement à réhausser votre moyenne en maths !</div>
            <div class="col-7">
                <div class="row justify-content-center">
                    <iframe title="video" src="https://www.youtube.com/watch?v=wrNLKRX99Og"></iframe>
                </div>
                <p>Le cours de maths a été compliqué ? Vous ne l’avez pas compris ou peu ? Cela arrive évidemment. Et vous vous dîtes que vous comprendrez mieux au prochain cours ? C’est possible, cependant la meilleure solution pour vous reste de creuser la question vous-même en prenant le temps. Servez-vous de nos cours vidéos et quizz ! Une fois le cours assimilé, jetez-vous dans le bain avec les exercies et prenez le risque de faire des erreurs. Les exercices corrigés vous permettront de les identifier pour mieux les comprendre. Ceci est probablement l’une des meilleures méthodes pour progresser en maths !</p>
            </div>
        </div>
        </div>

    )
}