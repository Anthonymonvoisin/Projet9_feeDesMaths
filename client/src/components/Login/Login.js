import React,{useState, useContext} from 'react'
import './login.css'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import logo from '../../Images/logo.png'

const Login = ()=>{
    const {state, dispatch}= useContext(UserContext)
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const history = useHistory()

    const postData = ()=>{
        if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            window.alert('Invalid Email !')          //PAS window.alert MAIS un TOAST AVEC BOOTSTRAP
            return
        }
        fetch("/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
            .then(data => {
                // console.log(data)
                if(data.error){
                    window.alert(data.error)            //PAS window.alert MAIS un TOAST AVEC BOOTSTRAP
                }
                else{
                    localStorage.setItem("jwt",data.token)
                    localStorage.setItem("user",JSON.stringify(data.user))
                    dispatch({type:"USER", payload:data.user})
                    window.alert("signed in")          //PAS window.alert MAIS un TOAST AVEC BOOTSTRAP
                    history.push('/')
                }
            }).catch(err=>{
            console.log(err)
        })
    }

    return(
    <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
            <div className="user_card">
                <div className="d-flex justify-content-center">
                    <div className="brand_logo_container">
                        <img src={logo} class="brand_logo" alt="Logo"/>
                    </div>
                </div>
                <div className="d-flex justify-content-center form_container">
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-append">
                                <span className="input-group-text">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                                </svg>
                                </span>
                            </div>
                            <input
                            class="form-control input_user"
                            type="email"
                            placeholder="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-2">
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-key-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                    </svg>
                                </span>
                            </div>
                            <input
                            class="form-control input_pass"
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                        </div>
                        <div className="d-flex justify-content-center mt-3 login_container">
                            <button type="button" name="button" className="btn login_btn" onClick={()=> postData()}>Login</button>
                        </div>
                    </form>
                </div>
                <div className="mt-4">
                    <div className="d-flex justify-content-center links">
                        Don't have an account? <a href="#" className="ml-2">Sign Up</a>
                    </div>
                    <div className="d-flex justify-content-center links">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
            </div>
        </div>
        <div><p></p></div>
    </div>
    
)
}


export default Login