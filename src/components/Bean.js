import React from "react";
import PropTypes from "prop-types";

function Bean(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBeanClicked(props.id)}>
        <h3>{props.name}</h3>
        <h5>${props.price} per pound</h5>
        <h5>Inventory: {props.amount} lbs in stock</h5>
        <hr />
      </div>
      <button onClick ={() => props.whenSellBeansClicked(props.id)}> Sell A Pound of Beans!</button>
    </React.Fragment>
  );
}

Bean.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenBeanClicked: PropTypes.func,
  whenSellBeansClicked: PropTypes.func
};

export default Bean;