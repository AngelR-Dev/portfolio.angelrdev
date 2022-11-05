import React from "react";
import "./style/home.css";

const Home = () => {
  const handleDownloadEsp = () => {
    fetch("./pdf/CV-31-10-2022-ESP.pdf").then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV-31-10-2022-ESP.pdf";
        alink.click();
      });
    });
  };

  const handleDownloadEng = () => {
    fetch("./pdf/CV-31-10-2022-ENG.pdf").then((res) => {
      res.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV-31-10-2022-ENG.pdf";
        alink.click();
      });
    });
  };

  return (
    <section id="home" className="home-container">
      <div className="container">
        <h1>My Name is Angel i'm a </h1>
        <p className="animate-text-container">
          <span className="demo-item">
            <span className="demo-item_inner">Front-end Developer &nbsp;</span>
          </span>
          <span className="demo-item">
            <span className="demo-item_inner">
              Technology enthusiast &nbsp;
            </span>
          </span>
          <span className="demo-item">
            <span className="demo-item_inner">Virtual world lover &nbsp;</span>
          </span>
        </p>
      </div>
      <div className="home__btn-container">
        <button onClick={handleDownloadEsp} className="home__btn">
          CV Español
        </button>
        <button onClick={handleDownloadEng} className="home__btn">CV English</button>
      </div>
      <div className="home__social-container">
        <div className="home__img-container"><a target="_blank" href="https://github.com/AngelR-Dev?tab=repositories"><img src="./img/github.png" alt="github-img" /></a></div>
        <div className="home__img-container"><a target="_blank" href="https://www.linkedin.com/in/angel-roldan-373b8724a/"><img src="./img/linkedin.png" alt="linkedin-img" /></a></div>
        <div className="home__img-container"><a target="_blank" href="https://wa.me/525577261327"><img src="./img/whatsapp.png" alt="whatsapp-img" /></a></div>
      </div>
    </section>
  );
};

export default Home;
