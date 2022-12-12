import React from "react";
import trainerImg from "../../assets/img/trainer.png";
import "../../styles/start.css";

const Start = () => {
  return (
    <section>
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img src={trainerImg} alt="" />
          </div>
          <div className="start__content">
            <h2 className="Section__titile">
              Ready to make a <span className="highlights">change?</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              perspiciatis tenetur asperiores architecto quos accusantium
              consequatur modi accusamus cumque consectetur veniam error
              nostrum, ducimus blanditiis nobis, harum eius alias obcaecati.
            </p>
            <button className="register__btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
