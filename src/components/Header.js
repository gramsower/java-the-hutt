import React from "react";
import coffeeHeader from "./../img/coffeeheader.jpg";

function Header() {
  return (
    <React.Fragment>
      <h1>Java the Hutt</h1>
      <h2>Bulk Coffee by the Pound</h2>
      <img src={coffeeHeader} alt="Coffee beans" />
    </React.Fragment>
  );
}

export default Header;