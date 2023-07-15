import React from 'react';

const PricingSection = () => {
  return (
    <section id="pricing">
      <h2>Pricing</h2>
      <div className="pricing-toggle">
        <button className="active">Monthly</button>
        <button>Annually</button>
      </div>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h3>Basic</h3>
          <p>$9.99</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>Select</button>
        </div>
        <div className="pricing-card">
          <h3>Pro</h3>
          <p>$19.99</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>Select</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
