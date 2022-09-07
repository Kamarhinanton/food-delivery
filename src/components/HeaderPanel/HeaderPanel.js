import React from "react";
import "./HeaderPanel.scss";
import Logo from "./Logo/Logo";

const HeaderPanel = () => (
  <header className="header">
    <div className="header__content">
      <Logo/>
    </div>
  </header>
);

export default HeaderPanel;
