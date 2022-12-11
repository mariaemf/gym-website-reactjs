import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="hero__wrapper">
          {/* ==== hero content ====  */}
          <div className="hero__content">
            <h2>Exercise is the Key to a Healthy Lifestyle</h2>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
              nisi unde quis doloremque, inventore ratione iure libero corporis
              itaque saepe aliquid quod voluptas qui? Tempore accusamus
              dignissimos dolores non.
            </p>

            <div className="hero-btns">
              <button className="register__btn">Get Started </button>
              <button className="watch_btn">
                <span>
                  <i class="ri-play-fill"></i>
                </span>
                Watch video
              </button>
            </div>
          </div>

          {/* ==== hero img ====  */}
          <div className="hero__img"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
