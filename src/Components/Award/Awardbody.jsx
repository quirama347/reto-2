import React, { Component } from 'react'
import './Award.css'
import paleta from '../../Images/Awards/paleta.jpeg'
import paletaagua from '../../Images/Awards/paletaagua.jpeg'
import colombina from '../../Images/Awards/colombina.jpeg'
import papasnaturales from '../../Images/Awards/papasnaturales.jpeg'
import papaspollo from '../../Images/Awards/papaspollo.jpg'
import papaslimon from '../../Images/Awards/papaslimon.jpeg'
import coca from '../../Images/Awards/coca.jpeg'
import cocabotella from '../../Images/Awards/cocabotella.jpg'
import manzana from '../../Images/Awards/manzana.jpeg'
export default class Awardbody extends Component {
    render() {
        return (
            <div>
                <h1 id="h1">Elige tu premio</h1>
                <div className="panel-heading columns">
                <div className="column"> 
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-128x128">
                            <img className="is-rounded" src={paleta} />
                            </figure>
                            <h4>1500 pt</h4>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-128x128">
                            <img className="is-rounded" src={paletaagua} />
                            </figure>
                            <h4>1600 pt</h4>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-128x128">
                            <img className="is-rounded" src={colombina} />
                            </figure>
                            <h4>1700 pt</h4>
                        </div>
                    </div>
                </div>
                </div>
                <div className="column">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src={papasnaturales} />
                            </figure>
                            <h4>1700 pt</h4>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src={papaspollo} />
                            </figure>
                            <h4>1800 pt</h4>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src={papaslimon} />
                            </figure>
                            <h4>1500 pt</h4>
                        </div>
                    </div>
                </div>
                </div>
                <div className="column">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src={coca} />
                            </figure>
                            <h4>1800 pt</h4>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src={cocabotella} />
                            </figure>
                            <h4>2000 pt</h4>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src={manzana} />
                            </figure>
                            <h4>1500 pt</h4>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <nav className="pagination" role="navigation" aria-label="pagination">
                <ul className="pagination-list">
                    <li>
                    <a className="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
                    </li>
                    <li>
                    <a className="pagination-link" aria-label="Goto page 2">2</a>
                    </li>
                    <li>
                    <a className="pagination-link" aria-label="Goto page 3">3</a>
                    </li>
                </ul>
            </nav>
            </div>
        )
    }
}
