import React from "react";
import "./HeaderPanel.scss";
import Logo from "./Logo/Logo";

const HeaderPanel = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Logo/>
      </div>
    </header>
  );
}
export default HeaderPanel;
