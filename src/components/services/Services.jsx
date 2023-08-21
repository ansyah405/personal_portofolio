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
            <h3>UI/UX Desaign</h3>
          </div>

          <ul className="service__list">
            <li>
              <MdCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>
        {/* end */}
        <article className="service">
          <div className="service__head">
            <h3>Content</h3>
          </div>

          <ul className="service__list">
            <li>
              <MdCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
            <li>
              <MdCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
            </li>
          </ul>
        </article>
        {/* end */}
      </div>
    </section>
  );
};

export default Services;
