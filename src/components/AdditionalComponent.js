import React from 'react';
import smallImage1 from '../images/logo1.png';
import smallImage2 from '../images/logo1.png';
import smallImage3 from '../images/logo1.png';
import image2 from '../images/logo1.png';

const AdditionalComponent = () => {
  return (
    <section>
      <div className="part1">
        <div>
          <h2>Smart jackpots that</h2>
          <p>you may love this</p>
          <p>anytime & anywhere</p>
        </div>
        <div className="border-line"></div>
        <div>
          <p>
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most relevant channels such as Facebook
          </p>
        </div>
      </div>
      <div className="part2">
        <div>
          <div>
            <img src={smallImage1} alt="Small Image 1" />
            <p>
              <strong>Automatic Payouts</strong>
            </p>
            <p>
              Got your blood tests delivered at home collect a sample from the news your blood tests
            </p>
          </div>
          <div>
            <img src={smallImage2} alt="Small Image 2" />
            <p>
              <strong>Network Effect</strong>
            </p>
            <p>
              Get your blood tests delivered at home collect a sample from the now your blood tests
            </p>
          </div>
          <div>
            <img src={smallImage3} alt="Small Image 3" />
            <p>
              <strong>Bigger Rewards Method</strong>
            </p>
            <p>
              Get your blood tests delivered at home collect a sample from the news your blood tests
            </p>
          </div>
        </div>
      </div>
      <div className="part3">
        <div className="left-section">
          <img src={image2} alt="Image 2" />
        </div>
        <div className="right-section">
          <h2>Designed &amp; built by the latest code integration</h2>
          <p>
            The rise of mobile devices transforms the way we consume information entirely
            and the world's most relevant channels such as Facebook
          </p>
          <a href="#" className="learn-more-button">Learn more</a>
        </div>
      </div>
    </section>
  );
};

export default AdditionalComponent;
