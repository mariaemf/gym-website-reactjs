import React from "react";
import "../../styles/pricing.css";

const Princing = () => {
  return (
    <section id="pricing-plan">
      <div className="container">
        <div className="princing__top">
          <h2 className="section__title">
            Gym <span className="highlights">Pricing</span> Plan
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing <br />
            elit. Cum, a enim mollitia ex earum quasi.
          </p>
        </div>
        {/* === pricing wrapper ===*/}
        <div className="pricing__wrapper">
          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="sectiont__title">Regular Member</h2>
              <h2 className="pricing sectiont__title">
                $50 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 classes per week
                </li>
              </ul>
              <button className="register__btn">Join Now </button>
            </div>
          </div>

          <div
            className="pricing__item pricing__item02"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="sectiont__title">Premium Member</h2>
              <h2 className="pricing sectiont__title">
                $70 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 classes per week
                </li>
              </ul>
              <button className="register__btn">Join Now </button>
            </div>
          </div>

          <div
            className="pricing__item "
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="sectiont__title">Standard Member</h2>
              <h2 className="pricing sectiont__title">
                $100 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 classes per week
                </li>
              </ul>
              <button className="register__btn">Join Now </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Princing;
