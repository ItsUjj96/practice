import React from 'react'

import image from '../images/screenshot.png';
import smallLogo1 from '../images/logo1.png';
import smallLogo2 from '../images/logo1.png';
import smallLogo3 from '../images/logo3.png';

const KeyFeaturesSection = () => {
  return (
    <section id="key-features">
      <div className="left-section">
        <img src={image} alt="Image" className="tilted-image" />
      </div>
      <div className="right-section">
        <h3>Awesome App Features</h3>
        <p>Increase productivity</p>
        <p><strong>Fast Performance</strong></p>
        <div className="small-logo">
          <img src={smallLogo1} alt="Small Logo 1" />
          <p>Prototyping</p>
        </div>
        <div className="small-logo">
          <img src={smallLogo2} alt="Small Logo 2" />
          <p>Vector Editing</p>
        </div>
        <div className="small-logo">
          <img src={smallLogo3} alt="Small Logo 3" />
          <p>App Development</p>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
