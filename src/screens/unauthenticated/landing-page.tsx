import React from "react";
import "./style.css";

const LandingPage = () => {
  return (
    <>
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
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <div className="email-signup-div">
              <input placeholder="Email Address"></input>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
