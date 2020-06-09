/**
 * ************************************
 *
 * @module  FeedContainer
 * @author
 * @date
 * @description container that renders TicketBox and TicketCreator
 *
 * ************************************
 */

<<<<<<< HEAD
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ticketActions from "../actions/ticketActions";
import MenteeTicketBox from "../components/MenteeTicketBox";
import BystanderTicketBox from "../components/BystanderTicketBox";
import TicketCreator from "../components/TicketCreator";
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/ticketActions';

// import components
// import MenteeTicketBox from '../components/MenteeTicketBox';
// import BystanderTicketBox from '../components/BystanderTicketBox';
import TicketCreator from '../components/TicketCreator';
import ResolveModal from '../components/ResolveModal';
import TicketStream from './TicketStream';

>>>>>>> 63b8510e8c0363e51a49777de5f19a7555a84686

const mapStateToProps = state => ({
  messageInput: state.tickets.messageInput,
  messageRating: state.tickets.messageRating,
  activeTickets: state.tickets.activeTickets,
  ticketsCount: state.tickets.ticketsCount,
  roomId: state.rooms.activeRoom.id,
  roomName: state.rooms.activeRoom.name,
  resolveModal: state.tickets.resolveModal,
  topic: state.tickets.topic
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ticketActions, dispatch);

class FeedContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    document.title = '(' + this.props.ticketsCount + ') ' + 'SnapDesk';
  }

  componentWillUnmount() {
    document.title = 'SnapDesk';
  }

  render() {
    return (
      <div className="feed-container">
        <ResolveModal
          resolveTicket={this.props.resolveTicket}
          toggleModal={this.props.toggleModal}
          updateFeedback={this.props.updateFeedback}
          updateFinalRating={this.props.updateFinalRating}
          resolveModal={this.props.resolveModal}
        />
        <div className="feed-grid">
          <TicketStream />
          <div className="ticket-creator-container">
            <TicketCreator {...this.props} key={this.props.userId} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
