/**
 * ************************************
 *
 * @module  Wrapper
 * @author team snapdesk
 * @date 02/22/2020
 * @description component that renders Navbars, FeedContainer and TicketCreator
 *
 * ************************************
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import * as userActions from "../actions/userActions";
import * as roomActions from "../actions/roomActions";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import FeedContainer from "./FeedContainer";
import { bindActionCreators } from "redux";

// import bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const mapStateToProps = state => ({
  // totalSnaps: state.tickets.totalSnaps,
  // leaderBoard: state.tickets.leaderBoard,
  ticketsCount: state.tickets.ticketsCount,
  userAvatar: state.user.userAvatar,
  userName: state.user.userName,
  userId: state.user.userId,
  activeRoom: state.rooms.activeRoom,
  rooms: state.rooms.rooms,
  newRoom: state.rooms.newRoom
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...userActions, ...roomActions }, dispatch);

class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserData();
    this.props.getRooms(this.props.userId);
  }

  render() {
    return (
      <div className="wrapper">
        <Row>
          <Col className="side-nav">
            <LeftNav url={this.props.userAvatar}
              userName={this.props.userName}
              activeRoom={this.props.activeRoom}
              rooms={this.props.rooms}
              addRoom={this.props.addRoom}
              NewRoom={this.props.newRoom}
              updateNewRoom={this.props.updateNewRoom}
            />
          </Col>
          <Col>
            <FeedContainer userName={this.props.userName}/>
          </Col>
          <Col className="side-nav">
            <RightNav
              ticketsCount={this.props.ticketsCount}
              activeRoom={this.props.activeRoom}
              userId={this.props.userId}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
