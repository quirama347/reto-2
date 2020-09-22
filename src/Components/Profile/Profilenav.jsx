import React, { Component } from 'react'
import robot3 from '../../Images/robot3.png'
import './Profile.css'
import { withRouter } from "react-router-dom";

 class Profilenav extends Component {
    close = () => {
        localStorage.removeItem("auth");
        this.props.history.replace("/Login")
    }
    render() {
        return (
            <>
            <nav className="navbar" id="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                    <img id="miniatura" src={robot3} />
                    </a>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    <a className="navbar-item">
                        Perfil Estudiante
                    </a>
                    <a className="navbar-item">
                        Grado 
                    </a>
                    </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <a className="button is-primary">
                            <strong>En Sesión</strong>
                        </a>
                        <a className="button is-light" onClick={this.close}>
                             Cerrar Sesión
                        </a> 
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