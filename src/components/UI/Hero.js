import React from "react";
import dumbleIcon from "../../assets/img/dumble.png";
import heroImg from "../../assets/img/gym-02.png";
import "../../styles/hero.css";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="hero__wrapper">
          {/* ==== hero content ====  */}
          <div className="hero__content">
            <h2>
              Exercise is the Key to a{" "}
              <span className="highlights">Healthy</span> Lifestyle
            </h2>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              nisi unde quis doloremque .
            </p>

            <div className="hero__btns">
              <button className="register__btn">Get Started </button>
              <button className="watch__btn">
                <span>
                  <i class="ri-play-fill"></i>
                </span>
                Watch video
              </button>
            </div>
          </div>

          {/* ==== hero img ====  */}
          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="heart__rate">
                <h5>Heart Rate</h5>
                <span>
                  <i class="ri-heart-pulse-fill"></i>
                </span>
                <h5>2567 BPM</h5>
              </div>
              <div className="gym__location">
                <span>
                  <i class="ri-map-pin-2-fill"></i>
                </span>
                <h5>find a new gym near you</h5>
              </div>
              <div className="duble__icon">
                <img src={dumbleIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
