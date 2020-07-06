import React from "react";
import Ticket from "./Ticket";
import PropTypes from 'prop-types';

function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      {Object.values(props.ticketList).map((ticket) => {
        // Make sure to explicitly return the Ticket object this time! We will explain why below.
        return <Ticket
          whenTicketClicked={props.onTicketSelection}
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          id={ticket.id}
          key={ticket.id} />
      })}
    </React.Fragment>
  );
}


TicketList.propTypes = {
  // The PropType below has been updated - it's now an object, not an array.
  ticketList: PropTypes.object,
  onTicketSelection: PropTypes.func
};
export default TicketList;