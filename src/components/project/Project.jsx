import React from "react";
import "./project.css";
import IMG1 from "../../assets/Desain tanpa judul(1).png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets//5.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/8.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Web Absen Karyawan",
    github: "https://github.com/ansyah405/Web_Absen_Karyawan",
  },
  {
    id: 2,
    image: IMG2,
    title: "Laravel Web E-commerce",
    github: "https://github.com/ansyah405/laravel-9-E-Commerce",
  },
  {
    id: 3,
    image: IMG3,
    title: "Web Personal Portofolio",
    github: "https://github.com/ansyah405/personal_portofolio",
  },
  {
    id: 4,
    image: IMG4,
    title: "Sunma Web",
    github: "",
  },
  {
    id: 5,
    image: IMG5,
    title: "WAXE",
    github: "",
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
                {github ? (
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                ) : (
                  <a
                    className="btn disabled"
                    onClick={(e) => e.preventDefault()}
                  >
                    Not Available
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
