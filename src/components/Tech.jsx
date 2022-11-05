import React from "react";
import "./style/tech.css";

const Tech = () => {
  return (
    <div id="tech" className="tech-container" data-aos="zoom-in-right" data-aos-duration='1000'>
      <div className="tech">
        <h2 className="tech__title">Technologies</h2>
        <div className="tech__img-box">
          <img src="./img/react.png" alt="" />
          <span>React</span>
        </div>
        <div className="tech__img-box">
          <img src="./img/html.png" alt="" />
          <span>HTML</span>
        </div>
        <div className="tech__img-box">
          <img src="./img/css.png" alt="" />
          <span>CSS</span>
        </div>
        <div className="tech__img-box">
          <img src="./img/javascript.png" alt="" />
          <span>JavaScript</span>
        </div>
        <div className="tech__img-box">
          <img src="./img/node.png" alt="" />
          <span>Node</span>
        </div>
        <div className="tech__img-box">
          <img src="./img/redux.png" alt="" />
          <span>Redux</span>
        </div>
        <div className="tech__img-box">
          <img src="./img/router.png" alt="" />
          <span>Router</span>
        </div>
        <div className="tech__img-box">
          <img src="./img/libraries.png" alt="" />
          <span>Libraries</span>
        </div>
        <div className="tech__img-box">
          <img src="./img/api.png" alt="" />
          <span>Api</span>
        </div>
      </div>
    </div>
  );
};

export default Tech;
