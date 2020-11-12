import React, {useContext, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import './Header.css'
import logo from '../../Images/logo.png'


const Header = () =>{
    return(
        <header>
            <div class="container">
            <div class="row">
            <div id="en-tete" class="col-12">
                <h1>Fée des maths</h1>
                <h2>- Site d'apprentissage pour MPSI -</h2>
                <img src={logo} alt= "logo" id="logo"/>
            </div>
            </div>
            </div>
        </header>
    )
}
export default Header