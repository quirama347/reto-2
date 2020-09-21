import React, { Component } from "react";

export class RegisterUser extends Component {
  render() {
    return (
      <section className="column">
        <section className="panel-block">
          <article className="columns is-mobile">
            <h1>registro</h1>
          </article>
        </section>
        <div class="columns">
          <div class="column is-three-fifths">
            is-three-fifths
            <div class="column">Auto</div>
            <div class="column">Auto</div>
          </div>
        </div>
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Component</p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris.
              <a href="#">@bulmaio</a>. <a href="#">#css</a>{" "}
              <a href="#">#responsive</a>
              <time datetime="2016-1-1" />
              11:09 PM - 1 Jan 2016
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">
              Save
            </a>
            <a href="#" class="card-footer-item">
              Edit
            </a>
            <a href="#" class="card-footer-item">
              Delete
            </a>
          </footer>
        </div>
      </section>
    );
  }
}

export default RegisterUser;
