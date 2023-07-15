import React from 'react';
import awardImage from '../images/logo1.png';
import storageImage from '../images/logo1.png';
import appImage from '../images/logo1.png';
import customizationImage from '../images/logo1.png';
import planningImage from '../images/logo1.png';
import supportImage from '../images/logo1.png';

const WhyToChoose = () => {
  return (
    <section>
      <h2>Why you should choose</h2>
      <h2>our app</h2>
      <p>
        The rise of mobile devices transforms the way we consume information entirely
        and the world's most relevant channels such as Facebook
      </p>
      <div className="why-choose-icons">
        <div>
          <img src={awardImage} alt="Award" />
          <p>10 Times Award</p>
          <p>
            Got your blood tests delivered at home collect a sample from the news your blood tests.
          </p>
        </div>
        <div>
          <img src={storageImage} alt="Cloud Storage" />
          <p>Cloud Storage</p>
          <p>
            Got your blood tests delivered at home collect a sample from the news your blood tests.
          </p>
        </div>
        <div>
          <img src={appImage} alt="App Development" />
          <p>App Development</p>
          <p>
            Got your blood tests delivered at home collect a sample from the news your blood tests.
          </p>
        </div>
        <div>
          <img src={customizationImage} alt="Customization" />
          <p>Customization</p>
          <p>
            Got your blood tests delivered at home collect a sample from the news your blood tests.
          </p>
        </div>
        <div>
          <img src={planningImage} alt="UX Planning" />
          <p>UX Planning</p>
          <p>
            Got your blood tests delivered at home collect a sample from the news your blood tests.
          </p>
        </div>
        <div>
          <img src={supportImage} alt="Customer Support" />
          <p>Customer Support</p>
          <p>
            Get your blood tests delivered at home collect a sample from the news your blood tests.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyToChoose;
