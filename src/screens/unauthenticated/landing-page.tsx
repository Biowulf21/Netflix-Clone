import React from "react";
import "./style.css";
import bg from "../../assets/netflix-hero-bg.jpg";

const LandingPage = () => {
  return (
    <>
      <div className="top-section-wrapper">
        <img className="top-section-bg" src={bg} alt="" />
        <header className="header">
          <h2>Netflix</h2>
          <div>
            <select className="language-select">
              <option defaultChecked value="English">
                English
              </option>
              <option value="Filipino">Filipino</option>
            </select>
            <button className="sign-in-btn">Sign In</button>
          </div>
        </header>
        <section>
          <div className="hero-widget-div">
            <div className="hero-widget">
              <h1 className="hero-title">
                Unlimited movies, TV shows, and more.
              </h1>
              <h3 className="hero-subtitle">Watch anywhere. Cancel anytime.</h3>
              <h4 className="hero-text">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h4>
              <div className="email-signup-div">
                <input
                  onFocus={(event) => (event.target.placeholder = "")}
                  className="hero-input"
                  placeholder="Email Address"
                ></input>
                <button className="get-started-btn">Get Started</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
