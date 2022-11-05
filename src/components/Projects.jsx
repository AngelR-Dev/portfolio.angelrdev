import React from "react";
import "./style/projects.css";

const Projects = () => {
  return (
    <div
      id="projects"
      data-aos="fade-up"
      data-aos-duration="1000"
      className="projects__container"
    >
      <h2 className="projects__title">Projects</h2>
      <div className="projects">
        <div className="projects__img-container">
          <a
            target="_blank"
            href="https://pokedex-api-angelr-dev.netlify.app/#/pokedex"
          >
            <img src="./img/pokesite1.png" alt="pokedex-site" />
          </a>
        </div>
        <div className="projects__img-container">
          <a
            target="_blank"
            href="https://e-comerce-postman-angelr.netlify.app/#/"
          >
            <img src="./img/e-commerce.png" alt="e-commerce-site" />
          </a>
        </div>
        <div className="projects__img-container">
          <a
            target="_blank"
            href="https://rickandmortyapp-angelroldan.netlify.app"
          >
            <img src="./img/rickandmorty.png" alt="rickandmorty-site" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
