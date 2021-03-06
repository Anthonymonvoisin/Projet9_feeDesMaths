import React, {useState, useEffect, useContext} from 'react'
import '../screens/Pages.css'
import './Cours.css';
import {Link, useHistory} from 'react-router-dom'
import { UserContext } from '../../App'

const Cours = ()=>{
    const [data, setData] = useState([])
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()


    /// SI tokenExpired => go to login page
    const clearExpiredToken = (errorCode)=>{
        if(errorCode === 'auth/id-token-expired'){
            localStorage.clear()
            dispatch({type:"CLEAR"})
            history.push('/login')
        }
    }

    function filterSelection() {
        var inputState = document.getElementById("inputState");
        if(inputState){
            var c = inputState.options[inputState.selectedIndex].value
            var x, i;
            x = document.getElementsByClassName("filterDiv");
            if (c == "all") c = "";
            for (i = 0; i < x.length; i++) {
                w3RemoveClass(x[i], "show");
                if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
            }
        }
    }

    function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
        }
    }

    function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }


    useEffect(()=>{
        fetch('/cours',{
            headers:{                                                   //ERR_HTTP_HEADERS_SENT ??
                Authorization:"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
            .then(result=>{
                clearExpiredToken(result.code)
                setData(result)
                if(result.length !== 0){
                    // console.log(result)
                    filterSelection("all")
                }
            })
    },[])



    return(
        <div class="col-10 offset-1" id="listecours">
            <h1>Cours</h1>
            <div className="lessonSelection">               {/*Dynamique en fonction des cours de la bdd*/}
                <div className="matiereSelection">
                <h2>Matieres</h2>
                    <select id="inputState" className="form-control" onChange={()=>filterSelection()}>
                        <option className="defaultValue" value="all">Show all</option>
                        <option value="math">Math</option>
                        <option value="physique">Physique</option>
                        <option value="anglais">Anglais</option>
                        <option value="test">Test</option>
                    </select>
                    <div><p></p></div>
                </div>

                {/* <div className="chapitreSelection">                          PAS ENCORE FAIT A FAIRE ?
                <h2>Chapitres</h2>
                    <select id="inputState" className="form-control">
                        <option defaultValue>All</option>
                        <option>Chapitre 1</option>
                        <option>Chapitre 2</option>
                        <option>Chapitre 3</option>
                        <option>Chapitre 4</option>
                        <option>Chapitre 5</option>
                    </select>
                </div> */}
            </div>
            <div className="allCard" >
                {
                    data.map(item=>{
                        return( 
                            <div id="lecon" className={"card filterDiv " + item.matiere} key={item.lessonId}>
                                <img className="card-img imgTest" src={item.photo} height="300px" width="100px" alt="Cardimagecap"></img>
                                <div className="f" >
                                    <div className="card-title" id="title">
                                        <div><h2>{item.matiere}</h2></div>
                                        <h2>{item.chapitre}</h2>
                                    </div>
                                    <div className="card-body">
                                        {item.description}
                                    </div>
                                    <Link to={"/cours/" +item.lessonId} className="btn btn-primary" id="bouton">Voir le cours</Link>
                                </div>
                            </div>
                            
                        )
                    })
                }

                {/*10 par page, apres ajouter page navigation*/}


            </div>
            
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                    <a className="page-link" href="/" tabIndex="-1">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="/">1</a></li>
                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                    <li className="page-item">
                    <a className="page-link" href="/">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Cours