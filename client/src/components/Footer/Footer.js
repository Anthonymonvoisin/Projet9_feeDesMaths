import React, {useContext, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import './Footer.css'
import logo from '../../Images/logo.png'


const Footer = () =>{
    return(
<footer class="col-12" id="footer">
<div class="container">

    
    
        <div class="row">
        <div class="col-md-4 text-center ">
            <div id="text">
        <Link to="/juridique">Mentions légales</Link>
            </div>
            </div>
            <div class="col-md-4 text-center ">
                <p id="text" >Fée des maths</p>
            </div>
            <div class="col-md-4 text-center ">
                <p id="text" >Site internet du projet 9</p>
            </div>
            <div class="col-12  ">
            <img src={logo} alt= "logo" id="logofoo"/>
            </div>
        </div>
    
</div>
</footer>

    )
}
export default Footer