import React, { Component } from "react";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import cabezarobot from "../../Images/cabezarobot.png";
import "./Review.css";
// import grafica from '../../Images/Reviews/grafica.jpeg'

export default class Review extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1 id="h1">Evaluación</h1>
        <div className="panel-heading">
          <h4>En esta Evaluación mediremos tu conocimientos</h4>
          <h6>Esfuerzate y así ganarás muchos puntos</h6>
          <img src={cabezarobot} id="cabezarobot" alt="robot" />
          <section>
            <p>
              1.  ¿Qué propiedad utilizamos para definir una imagen como fondo?
            </p>
            <div className="control">
              <label className="radio">
                <input type="radio" name="foobar" />
                background-attachment
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="foobar" />
                background-image
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="foobar" />
                background-src
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="foobar" />
                background-img
              </label>
              <br />
            </div>
            {/* <img src={grafica} alt="grafica"/> */}
          </section>
          <section>
            <p>
              2.   ¿Cuál es la forma más eficiente de aplicar estilos CSS en un
              documento HTML?
            </p>
            <div className="control">
              <label className="radio">
                <input type="radio" name="foobar" />
                Incrustado en la cabecera
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="foobar" />
                En linea
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="foobar" />
                Hojas de estilo externas
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="foobar" />
                Mediante Php
              </label>
              <br />
            </div>
          </section>
          <section>
            <p>3.   ¿Que entiendes por css ?</p>
            <div className="control">
              <label className="radio">
                <input type="radio" name="foobar" />
                Class style Sheets
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="foobar" />
                Creative Style System
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="foobar" />
                Cascading Style Sheets
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="foobar" />
                Cascading Style System
              </label>
              <br />
            </div>
          </section>
          <section>
            <p>
              4.   ¿Qué propiedad utilizamos para definir el color de los bordes?
            </p>
            <div className="control">
              <label className="radio">
                <input type="radio" name="foobar" />
                Border-color
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="foobar" />
                Color-border
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="foobar" />
                Border-bgcolor
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="foobar" />
                Border-style
              </label>
              <br />
            </div>
          </section>
        <section>
            <p>
              5.  ¿Con qué propiedad se define el espacio entre el borde de un elemento y los elementos que lo rodean?
            </p>
            <div className="control">
              <label className="radio">
                <input type="radio" name="foobar" />
                Border
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="foobar" />
                Margin
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="foobar" />
                Padding
              </label>
              <br />
              <label className="radio">
                <input type="radio" name="foobar" />
                Ninguna respuesta es correcta
              </label>
              <br />
            </div>
            <div id="button">
               <button className="button is-primary">Enviar</button>
              </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
