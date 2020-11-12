import React, { Component } from 'react';
import './Home.css';
import cerf from '../../Images/cerf.jpg'
import loup from '../../Images/loup.jpg'
import panthere from '../../Images/panthere.jpg'

/*import { } from '../Components/Components'; // liste des components a import*/

class Home extends Component{
    render(){
        return(
            <div class = "col-12">
                <Carrousel/>
                <Txt/>
            </div>

        );
    }
} export default Home

export const Carrousel = () =>{
    // mettre du code js ici si besoin
    return(
        <div class="col-8 offset-md-2">
            <div class="row justify-content-center">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={loup} height="200px" alt="First slide"></img>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={panthere} height="200px" alt="Second slide"></img>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={cerf} height="200px" alt="Third slide"/>
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
    )
}

export const Txt = () =>{
    // mettre du code js ici si besoin
    return(
        <div class="row">
            <div class="col-12" ><p>Taciti justo curabitur augue, sociosqu hendrerit. Bibendum condimentum est a cursus volutpat habitant. Interdum eu nisl sem euismod tempor ipsum aliquet, vel inceptos imperdiet. Tortor eros quisque netus neque sociis erat aptent dictum lorem. A, scelerisque blandit facilisis augue congue primis ante dolor inceptos scelerisque consectetur mauris? Justo orci vestibulum ligula gravida! Fermentum magna facilisi sodales duis vitae a tempor penatibus. Hendrerit penatibus suspendisse consectetur mus fames litora nulla purus. Potenti auctor natoque nostra pretium lorem imperdiet. Integer curae;.</p></div>
            <div class="col-5">Taciti justo curabitur augue, sociosqu hendrerit. Bibendum condimentum est a cursus volutpat habitant. Interdum eu nisl sem euismod tempor ipsum aliquet, vel inceptos imperdiet. Tortor eros quisque netus neque sociis erat aptent dictum lorem. A, scelerisque blandit facilisis augue congue primis ante dolor inceptos scelerisque consectetur mauris? Justo orci vestibulum ligula gravida! Fermentum magna facilisi sodales duis vitae a tempor penatibus. Hendrerit penatibus suspendisse consectetur mus fames litora nulla purus. Potenti auctor natoque nostra pretium lorem imperdiet. Integer curae;.</div>
            <div class="col-7">
                <div class="row justify-content-center">
                    <iframe title="video" src="https://www.youtube.com/watch?v=wrNLKRX99Og"></iframe>
                </div>
                <p>Taciti justo curabitur augue, sociosqu hendrerit. Bibendum condimentum est a cursus volutpat habitant. Interdum eu nisl sem euismod tempor ipsum aliquet, vel inceptos imperdiet. Tortor eros quisque netus neque sociis erat aptent dictum lorem. A, scelerisque blandit facilisis augue congue primis ante dolor inceptos scelerisque consectetur mauris? Justo orci vestibulum ligula gravida! Fermentum magna facilisi sodales duis vitae a tempor penatibus. Hendrerit penatibus suspendisse consectetur mus fames litora nulla purus. Potenti auctor natoque nostra pretium lorem imperdiet. Integer curae;.</p>
            </div>
        </div>

    )
}