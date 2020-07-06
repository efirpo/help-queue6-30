import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditTicketForm(props) {
  const { ticket } = props;

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({ names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: ticket.id });
  }
  return (
    <React.Fragment>
      <ReusableForm
        buttonText="Update Ticket" formSubmissionHandler={handleEditTicketFormSubmission} />
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  onEditTicket: PropTypes.func
};

export default EditTicketForm;