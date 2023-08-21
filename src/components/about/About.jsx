import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward, FaUsers, FaFolderPlus } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Experience</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5+ Clients</small>
            </article>
            <article className="about__card">
              <FaFolderPlus className="about__icon" />
              <h5>Project</h5>
              <small>3+ Competed</small>
            </article>
          </div>

          <p>
            I am a recent graduate with a degree in Computer Engineering from
            the PLN Institute of Technology. I am proficient in programming
            languages such as HTML, PHP, Python,Laravel,Next.JS , MySQL, Oracle,
            and Microsoft Office. I possess a strong eagerness for learning new
            things and am capable of working both in a team and independently.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
