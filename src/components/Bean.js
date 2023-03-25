import React from "react";
import PropTypes from "prop-types";

function Bean(props) {
  return (
    <React.Fragment>
      <div onCLick = {() => props.whenBeanClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>{props.price}</h4>
        <h4>{props.roast}</h4>
        <h4>{props.origin}</h4>
        <p>{props.tastingNotes}</p>
        {/* Insert ability to track lbs remaining here */}
        <hr />
      </div>
    </React.Fragment>
  );
}

Bean.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  tastingNotes: PropTypes.string,
  id: PropTypes.string,
  whenBeanClicked: PropTypes.func
};

export default Bean;