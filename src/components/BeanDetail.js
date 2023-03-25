import React from "react";
import PropTypes from "prop-types";

function BeanDetail(props) {
  const { bean, onClickingDelete, onClickingEdit } = props;

    return (
      <React.Fragment>
        <h2>Bean Details</h2>
        <h3>{bean.name}</h3>
        <h4>{bean.price}</h4>
        <h4>{bean.roast}</h4>
        <h4>{bean.origin}</h4>
        <p>{bean.tastingNotes}</p>
        <button onClick ={onClickingEdit}>Update Bean Details</button>
        <button onClick ={() => onClickingDelete(ticket.id) }>Delete Bean from Inventory</button>
        <hr />
      </React.Fragment>
    );
  }

  BeanDetail.propTypes = {
    bean: PropTypes.object,
    onClickingEdit: PropTypes.func,
    onClickingDelete: PropTypes.func
  };

  export default BeanDetail;