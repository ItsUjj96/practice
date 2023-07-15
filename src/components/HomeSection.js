import React from 'react';
import screenshot from '../images/screenshot.png';
import logo from '../images/logo.png';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo1.png';
import logo5 from '../images/logo2.png';

const HomeSection = () => {
  return (
    <section id="home">
      <nav>
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Key Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="try-for-free">
          <button>Try for Free</button>
        </div>
      </nav>
      <div className="content-wrapper">
        <div className="left-section">
          <h5>#Editors Choice App of 2021</h5>
          <h1>Best App for your modern lifestyle</h1>
          <p>Increase productivity with simple app</p>
          <button className="try-for-free">Try for Free</button>
          <button className="watch-demo">Watch Demo Video</button>
        </div>
        <div className="right-section">
          <img src={screenshot} alt="Application Screenshot" />
        </div>
      </div>
      <div className="trusted-logos">
        <p>Trusted by companies like</p>
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
        <img src={logo5} alt="Logo 5" />
      </div>
    </section>
  );
};

export default HomeSection;
