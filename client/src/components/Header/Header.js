import React, {useContext, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import './Header.css'
import logo from '../../Images/logo.png'


const Header = () =>{
    return(
        <header class="col-12">
            <div id="en-tete">
                <h1>Fée des maths</h1>
                <h2>- Site d'apprentissage pour MPSI -</h2>
                <img src={logo} alt= "logo" id="logo"/>
            </div>
        </header>

    )
}

export default Header