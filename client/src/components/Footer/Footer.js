import React, {useContext, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import './Footer.css'
import logo from '../../Images/logo.png'


const Footer = () =>{
    return(
        <footer className="col-12" id="footer">
            <div className="row">
                <div className="col-2 ">
                    <img src={logo} alt="logo" id="logo"/>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-4 ">
                            <a title="">Mentions Légales</a>
                        </div>
                        <div className="col-4">
                            <a title="Fée des maths">Fée des maths</a>
                        </div>
                        <div className="col-4">
                            <p>Site internet du projet 9</p>
                        </div>
                    </div>
                    <div className="col-md-6 offset-md-4">
                        <div className="justify-content-center">
                            <div id="copyright">Tous droits réservés.</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer