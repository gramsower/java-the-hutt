import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewBeanForm(props) {

  function handleNewBeanFormSubmission(event) {
    event.preventDefault();
    props.onNewBeanCreation({
      name: event.target.name.value,
      price: event.target.location.value,
      roast: event.target.location.value,
      origin: event.target.location.value,
      tastingNotes: event.target.location.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler=
        {handleNewBeanFormSubmission}
        buttonText="Add New Bean to Inventory" />
    </React.Fragment>
  );
}

NewBeanForm.propTypes = {
  onNewBeanCreation: PropTypes.func
};

export default NewBeanForm;
