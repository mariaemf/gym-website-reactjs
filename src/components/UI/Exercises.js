import React from "react";
import lunges from "../../assets/img/lunges.png";
import "../../styles/exercises.css";

const Exercises = () => {
  return (
    <section>
      <div className="container exercise__container">
        <div className="exercise__top">
          <h2 className="section__title">
            Benefits of <span className="highlights">Exercise</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br />
            Explicabo reprehenderit tempore iure numquam ?
          </p>
        </div>
        {/*===== exercise list ====*/}
        <div className="exercise__wrapper">
          <div className="exercise__item">
            <span className="exercise__icon">
              <img src={lunges} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Healthy Life </h4>
              <p>
                Lorem ipsum dolor sit amet
                <br /> consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
