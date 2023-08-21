import React from "react";
import "./service.css";
import { MdCheck } from "react-icons/md";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <MdCheck className="service__list-icon" />
              <p>Develop the user interface.</p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Responsive design on Mobile or Website.</p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Create mockups to develop user personas and scenarios.</p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Make wireframe, storyboard, sitemaps and screen flows. </p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>
                Analyzing the needs and user experience of the product to be
                made.
              </p>
            </li>
          </ul>
        </article>
        {/* end */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <MdCheck className="service__list-icon" />
              <p>Implement all parts of the mockup into the website. </p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Implement website design concepts into code </p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Create design elements for applications. </p>
            </li>
          </ul>
        </article>
        {/* end */}
        <article className="service">
          <div className="service__head">
            <h3>Other</h3>
          </div>
          <h4 className="service__list">Coming Soon</h4>
        </article>
        {/* end */}
      </div>
    </section>
  );
};

export default Services;
