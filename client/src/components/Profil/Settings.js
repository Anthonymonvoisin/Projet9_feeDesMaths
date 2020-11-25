import React from 'react'
import '../screens/Pages.css'
import './Settings.css'

const Settings = ()=>{
    return(
        <div className="myCard col-10 offset-1">
            <div className="user_card1">
                <div className="title title">SETTINGS
                </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Email"></input>
                        <div className="input-group-append">
                            <button className="btn login_btn" type="button">Modifier</button>
                        </div>
                    </div>
                    <p>You can reset your password, enter your email below</p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Email"></input>
                        <div className="input-group-append">
                            <button className="btn login_btn" type="button">Reset Password</button>   
                        </div>                        
                    </div>
            </div>
        </div>
    )
}

export default Settings

