import React, { Component } from "react";
import "bulma/css/bulma.css";
import phoenix from "../../Images/phoenix.jpg"
import "./Home.css";
export default class HomeBody extends Component {
  render() {
    return (
      <>
        <div className="columns" id="container1">
          <div className="column is-two-fifths" id="container3">
            <h1>Informacion</h1>
            <p>
              Es una institución oficial, dedicada a la prestación de servicios
              de educación formal en los niveles de Preescolar, Básica Primaria,
              Básica Secundaria, Media Técnica y Media Académica. Mediante una
              propuesta curricular diversificada, flexible y abierta a la
              innovación pedagógica, propicia la formación integral de sus
              estudiantes fundamentada en valores, en la conservación ambiental,
              en aprender a ser, a conocer, a hacer y a convivir dentro de un
              contexto de participación democrática y de trabajo colaborativo.
              El egresado, por lo tanto, tendrá la posibilidad de continuar su
              proceso formativo en la educación terciaria, vincularse al mundo
              del trabajo o generar opciones de auto sostenimiento mediante
              proyectos de emprendimiento.
            </p>
          </div>
          <div className="column" id="container4">
            <h1 id="title4">Historia</h1>
            <p>
              En 1969, durante la administración de Carlos Lleras Restrepo, por
              medio del Decreto 1962, se creó un grupo de colegios en todas los
              capitales departamentales llamados INEM3​. El INEM José Félix de
              Restrepo fue diseñado por el arquitecto Raúl Fajardo Moreno y se
              inauguró en 1970, antes de que se construyera la Avenida Las
              Vegas, motivo por el cual los estudiantes iniciaron protestas.
              Después de su construcción, se decidió bloquear dicha avenida,
              reclamando un puente peatonal. Sin embargo, debido a la lejanía
              del nuevo puente, los estudiantes reiniciaron los bloqueos, dando
              origen al puente actual.
            </p>
          </div>
        </div>
        <section className="column">
          <h1 id="title5">Nuestra vision</h1>
          <p>
            Presentamos a continuación el Manual de Convivencia de la
            Institución Educativa INEM José Félix de Restrepo, construido con la
            participación representativa de todos los miembros de la comunidad,
            mediante un proceso responsable, exigente y democrático, permitiendo
            disponer de una estructura normativa, fiel a los principios y
            polí­ticas de la Institución, a la Constitución Polí­tica de
            Colombia, Ley General de Educación, Ley de Infancia y Adolescencia y
            demás disposiciones legales.
          </p>
          <p>
            Hemos entendido el Manual de Convivencia como un pacto social
            regulatorio, que implica la construcción colectiva de normas
            mediante un proceso racional, consciente y dialógico en el que los
            deberes se acepten como imperativos exigibles a todos
            independientemente de los fines que cada uno persiga en su camino de
            autorrealización.
          </p>
          <p>
            El Manual de Convivencia del INEM se ha construido con la intención
            de que todo proceso formativo gire alrededor de los principios de
            autonomí­a, autogestión y participación y ejercicio responsable de
            los Derechos. Debe considerarse como una propuesta dinámica, en
            permanente proceso de mejoramiento, para lo cual se propone crear un
            clima de confianza, un ambiente donde las personas no se sientan
            juzgadas y una atmósfera donde todos aporten en la construcción de
            un contexto propicio a la convivencia pací­fica, basada en el
            respeto mutuo y en los deseos permanentes de superación.
          </p>
          <p>
            En el año 2020, la Institución Educativa INEM JOSÉ FÉLIX DE
            RESTREPO, caracterizada por su diversificación, se perfilará como un
            escenario educativo de alta calidad y centro de apropiación técnica
            y tecnológica en el área metropolitana del Valle de Aburrá, que
            involucra la investigación escolar en los procesos educativos, en
            los niveles de Preescolar, Básica Primaria, Básica Secundaria, Media
            Académica y Media Técnica.
          </p>
          <p>
            Así­, desde la investigación, la formación académica y humana y la
            apropiación tecnológica formará integralmente ciudadanos autónomos,
            crí­ticos, creativos, democráticos y comprometidos con el medio
            ambiente que valoren el saber cientí­fico, social y cultural;
            sujetos activos en producción de nuevos conocimientos; competentes
            para continuar en la cadena de formación técnica, tecnológica y
            profesional o acercarse al mundo laboral.
          </p>
          <br/>
          <h3 id="title6">Mision</h3>
          <p>
            Una vez termine de diligenciar exitosamente el formulario de
            inscripción, recibirá un mensaje automático, en el cual se le indica
            que su solicitud está en proceso
          </p>
          <p>
            La respuesta a la solicitud de cupo, se realizará a través de correo
            electrónico dentro de los 5 días hábiles siguientes a la inscripción
          </p>
        </section>
      </>
    );
  }
}
