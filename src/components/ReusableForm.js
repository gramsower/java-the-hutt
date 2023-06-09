import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Bean Name' />
        <input
          type='text'
          name='price'
          placeholder='Price per pound (USD)' />
        <input 
          type='text'
          name='roast'
          placeholder='Roast' />
        <input
          type='text'
          name='origin'
          placeholder='Place of Origin' />
        <textarea
          name='tastingNotes'
          placeholder='Tasting Notes' />
        <input
          type='text'
          name='amount'
          placeholder='Amount In Stock (lbs)' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;