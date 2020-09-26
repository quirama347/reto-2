import React, { Component } from 'react'
import "./RegisterUser.css";
import 'bulma/css/bulma.css';
import robot3 from "../../Images/robot3.png"
import cabezarobot from '../../Images/cabezarobot.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
export default class Register extends Component {
    render() {
        return (
        <div className="columns is-centered" id="register">
                 <section className="column" id="column2">
                    <img className="robot" src={robot3} alt="robot" />
                    <h1 id="h1">E D D Y - A P P</h1>
                    <h3 id="h3">Educacion de alta calidad, al alcance de todos</h3>
                        <span id="icons-login">
                            <a href="https://www.facebook.com/Eddy-Software-Educativo-105583811295277" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/SoftwareEddy" target="_blank"><i className="fab fa-twitter"></i></a>
                            <a href="mailto:eddysoftwareducativo@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a>
                        </span>
            </section>
              <div className="column">
                <img className="head" src={cabezarobot} alt="robot" />
                    <div className="Registrar">
                        <h1 id="title-registrar">Registro de Usuario</h1>
                    </div>
                        <div className="titles">
                            <label id="correo"> Usuario o Correo </label>
                        </div>    
                        <div className="field">
                        <div className="field has-icons-left has-icons-right">
                        <span className="icon">
                                <i><FontAwesomeIcon id="icon-email" icon="envelope"/></i>
                            </span>
                            <span className="icon">
                                <i><FontAwesomeIcon id="icon-check" icon="check"/></i>
                            </span>
                            <input className="input is-medium" id="input1" type="email" placeholder="Ingrese correo electronico" required />
                        </div>
                    </div> 
                        <div className="titles">    
                            <p className="contraseña"> Contraseña </p>
                        </div>    
                        <div className="field">
                            <p className="control has-icons-left">
                        <span className="icon">
                                <i><FontAwesomeIcon id="icon-lock" icon="lock"/></i>
                            </span>
                            <input className="input is-medium" id="input2" type="password" placeholder="Ingrese contraseña" required/>
                            </p>
                        </div> 
                        <div className="control1">
                            <label className="radio"><input type="radio" name="answer" />Docente</label>
                            <label className="radio"><input type="radio" name="answer" />Estudiante</label>
                        </div>
                        <div className="control">
                            <button id="boton" className="button is-primary">Enviar</button>
                        </div>
                        <br/>
                        <div className="option">
                        <p>Ya tienes cuenta?</p><a id="link" href=""> Ingresa aquí</a>
                    </div>
                </div>
                </div>
        )
    }
}