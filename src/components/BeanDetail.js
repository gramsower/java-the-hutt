import React from "react";
import PropTypes from "prop-types";

function BeanDetail(props) {
  const { bean, onClickingDelete, onClickingEdit } = props;

    return (
      <React.Fragment>
        <h2>Bean Details</h2>
        <h3>Name: {bean.name}</h3>
        <h5>${bean.price} per pound</h5>
        <h5>Inventory: {bean.amount} lbs in stock</h5>
        <h5>Roast Level: {bean.roast}</h5>
        <h5>Origin: {bean.origin}</h5>
        <p>{bean.tastingNotes}</p>
        <button onClick ={onClickingEdit}>Update Bean Details</button>
        <button onClick ={() => onClickingDelete(bean.id) }>Delete Bean from Inventory</button>
        <hr />
      </React.Fragment>
    );
  }

  BeanDetail.propTypes = {
    bean: PropTypes.object,
    onClickingEdit: PropTypes.func,
    onClickingDelete: PropTypes.func,
  };

  export default BeanDetail;