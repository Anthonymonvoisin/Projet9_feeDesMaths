import React, {useState, useEffect, useContext}from 'react'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import './Admin.css';
import '../screens/Pages.css'

// import {testExpiredToken} from './clearToken'

const Admin = () => {
    const [data, setData] = useState([])
    const [errorMessage, setErrorMessage] = useState([])
    const [allow, setAllow] = useState([])

    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    const testExpiredToken = () => {
            localStorage.clear()
            dispatch({type: "CLEAR"})
            history.push('/login')
    }

    useEffect(()=>{
        fetch('/tokenIsOk',{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("jwt")
            }
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.tokenOk === true){
                return
            }
            else{
                testExpiredToken()
            }
        })
    })

    // let accessToken
    useEffect(() => {
        fetch('/admin',{
            headers:{
                Authorization:"Bearer "+localStorage.getItem("jwt")/*accessToken*/
            }
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result)
            if(result.allow === true){
                setData(result.users)
                setAllow(result.allow)
            }
            else{
                setErrorMessage(result.error)
            }
        })
    }, [])


    let idValue, newRank
    const rankModification = () => {
        const inputState = document.getElementById("inputState")
        if (inputState) {
            newRank = inputState.options[inputState.selectedIndex].value
        }
        const inputId = document.getElementById("inputId")
        if (inputId) {
            idValue = inputId.value
            document.getElementById('inputId').value = "";
        }
        fetch(`/admin/rankChange`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                userId: idValue,
                newRank
            })
        }).then(res => res.json())
        .then((result)=>{
            if(result.allow === true){
                setData(result)
            }
            else{
                window.alert(result.error)
            }
        })
        .catch(err=>{
            console.error(err)
        })
    }

    if(allow === true){
        return(
            <div className="adminClass">
                <div>
                    <h1>Utilisateurs</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>isenId</th>
                                <th>userId</th>
                                <th>rank</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map(item=>{
                            return(
                                <tr key={item.userId}>
                                    <td>{item.isenId}</td>
                                    <td>{item.userId}</td>
                                    <td>{item.rank}</td>
                                </tr>
                            )
                        })}
                        </tbody>
    
    
                    </table>
                </div>
                <div className="card modif-card">
                    <h1>Modification du rank</h1>
                    <div className="formulaire">
                        <input 
                        type="text"
                        placeholder="userId"
                        id="inputId"
                        />
                        <select id="inputState" className="form-control">
                            <option value="student" defaultValue="student">Student</option>
                            <option value="professor">Professor</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={()=>rankModification()}>Modifier</button>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>{errorMessage}</h1>
            </div>
        )
    }
}

export default Admin