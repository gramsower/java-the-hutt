import React from "react";
import coffeeHeader from "./../img/coffeeheader.jpg";

function Footer() {
  return (
    <React.Fragment>
      <h3>(c) 2023 - Greg Ramsower</h3>
      <img src={coffeeHeader} alt="Coffee beans" />
    </React.Fragment>
  );
}

export default Footer;