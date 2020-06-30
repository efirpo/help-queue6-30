import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Check1 from './Check';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checkQuestion: 0,
      formVisibleOnPage: false

    };

  }
  handleClick = () => {
    let checkQuestion;
    if (!this.state.formVisibleOnPage) {
      switch (this.state.checkQuestion) {
        case (0):
          this.setState(prevState => ({ checkQuestion: 1 }))
          console.log(this.state.checkQuestion)
          break;
        case (1):
          this.setState(prevState => ({ checkQuestion: 2 }))
          break;
        case (2):
          this.setState({ checkQuestion: 3, formVisibleOnPage: true })
          break;
      }
    }
    this.setState({ checkQuestion });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let questionText = ["Have you read through LHTP?", "have you asked another pair?", "have you prayed?"]
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />;
      buttonText = "Return to Ticket List";
    } else {
      if (this.state.checkQuestion == 0) {
        currentlyVisibleState = <Check1 />;
        buttonText = "Yes";
      } else if (this.state.checkQuestion == 1) {
        currentlyVisibleState = <Check1 />;
        buttonText = "Yes";
        questionText = questionText[Check1.checkQuestion]
      } else if (this.state.checkQuestion == 2) {
        currentlyVisibleState = <Check1 />;
        buttonText = "Yes";
      } else if (this.state.checkQuestion == 3) {
        currentlyVisibleState = <Check1 />
        buttonText = "Yes";
      }
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {questionText[Check1.checkQuestion]}
        <button onClick={this.handleClick}>{buttonText}</button> {}
      </React.Fragment>
    );
  }
}

export default TicketControl;