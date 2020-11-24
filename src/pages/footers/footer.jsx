import React from "react";
import "./myfooter.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© Balasubramoniam &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;
