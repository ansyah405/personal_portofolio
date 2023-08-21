import React from "react";
import "./project.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Web Absen Karyawan",
    github: "https://github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Web Absen Karyawan",
    github: "https://github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Web Absen Karyawan",
    github: "https://github.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Web Absen Karyawan",
    github: "https://github.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Web Absen Karyawan",
    github: "https://github.com",
  },
];

const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
