import React, {useEffect, createContext, useReducer, useContext} from 'react';
import NavBar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Profile from './components/Profil/Profile'
import Register from './components/Register/Register'
import Admin from './components/Admin/Admin'
import Settings from './components/Profil/Settings'
import Cours from './components/Cours/Cours'
import Addlesson from './components/Cours/Addlesson'
import Mescours from './components/Cours/MesCours'
import Juridique from './components/Juridique/Juridique'
import {reducer, initialState} from './reducer/userReducer'

// {/*Pagination cours precis  ->  a suppr*/}
import CoursPrecis from './components/Cours/CourPrecis'


export const UserContext = createContext()

const Routing = () => {
    const history = useHistory()
    const {state, dispatch} = useContext(UserContext)
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            dispatch({type: "USER", playload: user})
            // history.push('/')            if user reload go to home page
        } else {
            history.push('/login')          /////////////if user can access home without signin change path to '/'
        }
    }, [])

    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/profile">
                <Profile/>
            </Route>
            <Route path="/admin">
                <Admin/>
            </Route>
            <Route path="/settings">
                <Settings/>
            </Route>
            <Route exact path="/cours">
                <Cours/>
            </Route>
            <Route path="/mypost">
                <Mescours/>
            </Route>
            <Route path="/createpost">
                <Addlesson/>
            </Route>
            <Route path="/cours/:id">
                <CoursPrecis/>
            </Route>
            <Route exact path="/juridique">
                <Juridique/>
            </Route>
        </Switch>
    )
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <UserContext.Provider value={{state, dispatch}}>
            <BrowserRouter>
                {/* HEADER */}
                <Header/>
                <NavBar/> {/* */}
                {/*Body*/} {/*visible que si login*/}
                <Routing/>
                {/* FOOTER
          Ajouter Information en footer et non en navbar
        */}
                <Footer/>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
