/**
 * ************************************
 *
 * @module  BystanderTicketBox
 * @author
 * @date
 * @description  component that renders a single textbox for all Bystanders / Mentors
 *
 * ************************************
 */

import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';



class BystanderTicketBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let buttons;
    const {
      acceptTicket,
      cancelAccept,
      userId,
      ticket: { 
        messageInput,
        messageRating,
        messageId,
        menteeId,
        menteeName,
        timestamp,
        status,
        mentorId,
        topic
      }
    } = this.props;

    if (status === 'active') {
      buttons = (
        <div className="flex-container post-button">
          <Button variant="link" className="button-subtle" onClick={() => acceptTicket(messageId)} type="button">
            {/* Icon by Bytesize https://github.com/danklammer/bytesize-icons */}
            <svg id="i-reply" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M10 6 L3 14 10 22 M3 14 L18 14 C26 14 30 18 30 26" />
            </svg>
            <span>Accept</span>
          </Button>
        </div>
      )
    } else if (userId === mentorId && status === 'pending') {
      buttons = (
        <div className="flex-container post-button">
          <Button variant="link" className="button-subtle delete" onClick={() => cancelAccept(messageId)} type="button">
            {/* Icon by Bytesize https://github.com/danklammer/bytesize-icons */}
            <svg id="i-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M2 30 L30 2 M30 30 L2 2" />
            </svg>
            <span>Cancel</span>
          </Button>
        </div>
      )
    } else if (userId !== mentorId && status === 'pending') {
      buttons = (
        <div className="flex-container post-button accepted">
          <Button disabled={true} variant="link" className="button-subtle" type="button">
            {/* Icon by Bytesize https://github.com/danklammer/bytesize-icons */}
            <svg id="i-lock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M5 15 L5 30 27 30 27 15 Z M9 15 C9 9 9 5 16 5 23 5 23 9 23 15 M16 20 L16 23" />
              <circle cx="16" cy="24" r="1" />
            </svg>
            <span>Accepted</span>
          </Button>
        </div>
      )
    }


    // if (status === 'active') {
    //   //ticket published by another user but has not been pick up yet
    //   //Accept button will be active but Cancel button will not and mentee is anonymous
    //   buttons = (
    //     <span>
    //       <Button onClick={() => acceptTicket(messageId)} type="button" className="btn btn-success">Accept</Button>
    //       <Button disabled={true} type="button" className="btn btn-secondary">Cancel</Button>
    //     </span>
    //   )
    // } else if (userId !== mentorId && status === 'pending') {
    //   //this is when the ticket has been picked up by another mentor already
    //   //Both button will not be active and mentee is anonymous
    //   buttons = (
    //     <span>
    //       <Button disabled={true} type="button" className="btn btn-success">Accept</Button>
    //       <Button disabled={true} type="button" className="btn btn-secondary">Cancel</Button>
    //     </span>
    //   )
    // } else if (userId === mentorId && status === 'pending') {
    //   //user is the mentor
    //   //Cancel button is active but Accept is not. mentee userName is active
    //   buttons = (
    //     <span>
    //       <Button disabled={true} type="button" className="btn btn-success">Accept</Button>
    //       <Button onClick={() => cancelAccept(messageId)} type="button" className="btn btn-warning">Cancel</Button>
    //     </span>
    //   )
    // }

    const snapRating = [];
    for (let i = 0; i < messageRating; i++) {
      snapRating.push(
        <div>
          <svg className="fill" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 108 162">
            <path d="M51.5,43.8V10.5C51.5,9.7,52.2,9,53,9s1.5,0.7,1.5,1.5v33.3c0,0.8-0.7,1.5-1.5,1.5
            C52.2,45.2,51.5,44.6,51.5,43.8z"/>
            <path d="M59.5,47.3c0.5,0,0.9-0.2,1.2-0.6l16-20.9c0.2-0.3,0.3-0.7,0.3-1.1c-0.1-0.4-0.2-0.7-0.6-1
              c-0.3-0.2-0.6-0.3-0.9-0.3c-0.5,0-0.9,0.2-1.2,0.6l-16,21c-0.5,0.6-0.4,1.6,0.3,2C58.8,47.2,59.2,47.3,59.5,47.3z"/>
            <path d="M45.3,46.8c0.3,0.4,0.7,0.6,1.2,0.6c0.3,0,0.6-0.1,0.9-0.3c0.3-0.2,0.5-0.6,0.6-1s-0.1-0.8-0.3-1.1l-16-20.9
              c-0.3-0.4-0.7-0.6-1.2-0.6c-0.3,0-0.6,0.1-0.9,0.3c-0.6,0.5-0.8,1.4-0.3,2L45.3,46.8z"/>
            <path d="M92.4,109.5c1.2,4.1-0.2,8.7-3.7,11.6c-11.8,9.7-22.3,16.9-38,22.3l-9.8,8.8c-0.5,0.5-1.2,0.8-2,0.8l0,0v-0.8
              l-0.1,0.7h-0.2c-0.7-0.1-1.4-0.4-1.8-0.9L8.9,121c-1-1.1-1-2.9,0.1-4l8.5-8.7c-2.2-8.7,0.2-17.4,2.3-25.1c2.1-7.6,3.9-14.2,1-19.1
              c-2-3.3-2.6-6.2-1.7-8.7c0.8-2.3,2.7-3.7,4.3-4.2c1.1-0.4,2.3-0.6,3.5-0.6c6.5,0,12.4,6.1,13.7,14.3c0.6,3.8,1.4,12.9,1.8,18
              c8.4-7.9,30.7-28.7,37.1-34.2c3.7-3.2,8-6.5,13-6.5c0.4,0,0.7,0,1.1,0.1c2.5,0.2,4.6,1.6,5.6,3.6c3.1,6.5-4.5,14.1-8.2,17.7
              c-3.1,3.1-8.7,8.4-11.7,11.3C82,75.8,84,78,84.7,81c0.5,2.4,0.1,5.2-1.2,7.7c2.9,0.8,5,2.9,5.8,5.8c0.7,2.8,0.1,6-1.9,9
              C89.7,104.6,91.6,106.7,92.4,109.5z"/>
          </svg>
        </div>
      );
    };

    return (

      // <div className="BystanderTicketBox ticketbox">
      //   <p>Topic: {topic}</p>
      //   <p>Request: {messageInput}</p>
      //   <p>User: {menteeName}</p>
      //   <p>Expected Snaps: {messageRating}</p>
      //   {buttons}
      // </div>

      <div className="ticket-box bystander">
        <div className="request">
          <div className="flex-container name-timestamp-container">
            <div>
              <p className="fade">request by {menteeName.toLowerCase()}</p>
            </div>
            <div>
              <p className="fade">{timestamp}</p>
            </div>
          </div>
          <p>{messageInput}</p>
        </div>
        <div className="flex-container snaps-topic-container">
          <div className="flex-container">
            {snapRating}
          </div>
          <div className="topic">
            {topic}
          </div>
        </div>
        <hr />
        {buttons}
      </div>
    )
  }
}

export default BystanderTicketBox;
