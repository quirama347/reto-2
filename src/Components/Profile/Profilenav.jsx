import React, { Component } from 'react'
import cabezarobot from '../../Images/cabezarobot.png'
import './Profile.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faUser } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fas, faUser)

class Profilenav extends Component {
    state = {
        user: ''
    }
    componentDidMount() {
        const user = localStorage.getItem("user")
        this.setState({ user: user ? user : '' });
        }
    close = () => {
        localStorage.removeItem("auth");
        this.props.history.replace("/")
    }
    render() {
        return (
            <>
            <nav className="navbar" id="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                    <img id="mini" src={cabezarobot} />
                    </a>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    <a className="navbar-item" id="user1">
                    <FontAwesomeIcon icon={faUser}/>
                        { this.state.user && this.state.user }
                    </a>
                    <a className="navbar-item" id="grado">Grado</a>
                    </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <button className="button is-primary">Activo</button>
                        <button className="button is-light" onClick={this.close}>Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
        )
    }
}
export default withRouter(Profilenav);
