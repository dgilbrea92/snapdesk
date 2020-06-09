import React from 'react';
// import bootstrap components
import {
  Nav,
  NavDropdown,
  Navbar,
  FormControl,
  InputGroup,
  Button
} from 'react-bootstrap';

const LeftNav = props => {
  let roomList = [];
  if (props.rooms.length > 0) {
    roomList = props.rooms.map((room, i) => {
      return <NavDropdown.Item key={i}>{room.name}</NavDropdown.Item>;
    });
  }
  roomList.push(
    // <NavDropdown.Item key={roomList.length}>
    <InputGroup className="createRoom">
      <FormControl
        id="roomForm"
        type="text"
        placeholder="Room name"
        value={props.rooms.newRoom}
        onChange={e => {
          props.updateNewRoom(e.target.value);
        }}
      />
      <InputGroup.Append>
        <Button
          onClick={e => {
            e.preventDefault();
            props.addRoom();
          }}
        >
          Create
        </Button>
      </InputGroup.Append>
    </InputGroup>
    // </NavDropdown.Item>
  );

  return (
    <Navbar bg="dark" variant="dark" className="flex-column navbar-left">
      <div className="top-nav">
        <Navbar.Brand href="/">
          <img
            src="image/logo2.png"
            id="nav-logo"
            className="d-inline-block align-top"
            alt="SnapDesk"
          />
        </Navbar.Brand>
        <hr />
        <Navbar.Brand href="/">
          <img
            alt=""
            src={props.url}
            className="d-inline-block rounded-circle profile-pic"
          />
          {props.userName}
        </Navbar.Brand>
        <NavDropdown title={props.activeRoom.name}>{roomList}</NavDropdown>
      </div>
      <div className="logout flex-container">
        <Button variant="outline-light" size="sm" onClick={() => console.log('implement logout feature')}>
          Logout
        </Button>
      </div>
    </Navbar>
  );
}

export default LeftNav;
