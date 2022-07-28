import React from 'react';
import './HeaderPanel.css';

const HeaderPanel = () => (
  <div className="header-container" data-testid="HeaderPanel">
      <div className="header-content">
          <div className="logo-container">
              <div className="sj-logo white-text">SJ</div>
              <div>
                  <span className="logo-text green-text">FOOD</span>
                  <span className="logo-text white-text">DELIVERY</span>
              </div>
          </div>
      </div>
  </div>
);

export default HeaderPanel;
