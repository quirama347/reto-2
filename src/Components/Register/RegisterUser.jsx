import React, { Component } from "react";
import "./RegisterUser.css";
import "bulma/css/bulma.css";
import robot3 from "../../Images/robot3.png";
import cabezarobot from "../../Images/cabezarobot.png";

export default class Register extends Component {
  render() {
    return (
      <div className="columns is-centered" id="register">
        <section className="column" id="column2">
          <img className="robot" src={robot3} alt="robot" />
          <h1 id="h1">E D D Y - A P P</h1>
          <h3 id="h3">Educacion de alta calidad, al alcance de todos</h3>
          <span id="icons-login">
            <a
              href="https://www.facebook.com/Eddy-Software-Educativo-105583811295277"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/SoftwareEddy" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:eddysoftwareducativo@gmail.com" target="_blank">
              <i className="fas fa-envelope"></i>
            </a>
          </span>
        </section>
        <div className="column" id="column1">
          <img className="head" src={cabezarobot} alt="robot" />
          <form onSubmit={this.handleOnSubmit}>
            ​{" "}
            <div className="Registrar">
              <h1 id="title-registrar">Registrar Usuario</h1>
            </div>
            <label className="label" id="label">
              Correo electronico
            </label>
            <br />
            <div className="field control has-icons-left">
              <input
                className="input is-info"
                name="name"
                onChange={this.handleOnchange}
                placeholder="Ingresa un correo electronico"
                id="email"
                required
              />
              <span className="icon is-left">
                <i className="zmdi zmdi-account"></i>
              </span>
            </div>
            ​ <label className="label">Contraseña</label>
            <div className="field control has-icons-left">
              <input
                className="input is-info"
                onChange={this.handleOnchange}
                name="password"
                type="password"
                placeholder="Ingresa una contraseña"
                id="password"
                required
              />
              <span className="icon is-small is-left">
                <i className="zmdi zmdi-email"></i>
              </span>
            </div>
            <div className="control1">
              <label className="radio">
                <input type="radio" name="answer" />
                Docente
              </label>
              <label className="radio">
                <input type="radio" name="answer" />
                Estudiante
              </label>
            </div>
            <div className="control">
              <button id="boton" className="button is-primary">
                Enviar
              </button>
            </div>
            <br />
            <div className="option">
              <p>Ya tienes cuenta?</p>
              <a id="link" href="">
                {" "}
                Ingresa aquí
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
