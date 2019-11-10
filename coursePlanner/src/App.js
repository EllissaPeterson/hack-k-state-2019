import React, { useState } from 'react';
import './App.css';
import CHeader from './components/CustomHeader.js'
import {Button, Input, Form, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import SemesterModal from './components/SemesterModal.js'
import axios from 'axios';

import {Container, Row, Col} from 'react-bootstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      phoneNumber: "",
      courseNumber: [
        ['COM S 228', 'COM S 228', 'COM S 228', 'COM S 228', 'COM S 228'],
        ['COM S 228', 'COM S 228', 'COM S 228', 'COM S 228', 'COM S 228'],
        ['COM S 228', 'COM S 228', 'COM S 228', 'COM S 228', 'COM S 228'],
        ['COM S 228', 'COM S 228', 'COM S 228', 'COM S 228', 'COM S 228'],
        ['COM S 228', 'COM S 228', 'COM S 228', 'COM S 228', 'COM S 228'],
        ['COM S 228', 'COM S 228', 'COM S 228', 'COM S 228', 'COM S 228'],
        ['COM S 228', 'COM S 228', 'COM S 228', 'COM S 228', 'COM S 228'],
        ['COM S 228', 'COM S 228', 'COM S 228', 'COM S 228', 'COM S 227']
      ],
      courseCredits: [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 5, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5]
      ],
      program: {},
      dropdownOpen: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    axios.post("http://35.224.245.97", {"action" : "getprograms"})
    .then(res => {
      console.log('something');
        console.log(res.data);
        this.setState({program : res.data});
        
      })
  };

  sendText(phoneNumber) {
    var Base64 = require('js-base64').Base64;
    let message = 'Semester 1: ' + this.state.courseNumber[0][0] + ', ' 
      + this.state.courseNumber[0][1] + ', '
      + this.state.courseNumber[0][2] + ', '
      + this.state.courseNumber[0][3] + ', '
      + this.state.courseNumber[0][4] + '\n'
      + 'Credits: ' + (this.state.courseCredits[0][0] + this.state.courseCredits[0][1] 
      + this.state.courseCredits[0][2] + this.state.courseCredits[0][3] 
      + this.state.courseCredits[0][4]) + '\n\n'
      + 'Semester 2: ' + this.state.courseNumber[1][0] + ', '
      + this.state.courseNumber[1][1] + ', '
      + this.state.courseNumber[1][2] + ', '
      + this.state.courseNumber[1][3] + ', '
      + this.state.courseNumber[1][4] + '\n'
      + 'Credits: ' + (this.state.courseCredits[1][0] + this.state.courseCredits[1][1] 
      + this.state.courseCredits[1][2] + this.state.courseCredits[1][3] 
      + this.state.courseCredits[1][4]) + '\n\n'
      + 'Semester 3: ' + this.state.courseNumber[2][0] + ', '
      + this.state.courseNumber[2][1] + ', '
      + this.state.courseNumber[2][2] + ', '
      + this.state.courseNumber[2][3] + ', '
      + this.state.courseNumber[2][4] + '\n'
      + 'Credits: ' + (this.state.courseCredits[2][0] + this.state.courseCredits[2][1] 
      + this.state.courseCredits[2][2] + this.state.courseCredits[2][3] 
      + this.state.courseCredits[2][4]) + '\n\n'
      + 'Semester 4: ' + this.state.courseNumber[3][0] + ', '
      + this.state.courseNumber[3][1] + ', '
      + this.state.courseNumber[3][2] + ', '
      + this.state.courseNumber[3][3] + ', '
      + this.state.courseNumber[3][4] + '\n'
      + 'Credits: ' + (this.state.courseCredits[3][0] + this.state.courseCredits[3][1] 
      + this.state.courseCredits[3][2] + this.state.courseCredits[3][3] 
      + this.state.courseCredits[3][4]) + '\n\n'
      + 'Semester 5: ' + this.state.courseNumber[4][0] + ', '
      + this.state.courseNumber[4][1] + ', '
      + this.state.courseNumber[4][2] + ', '
      + this.state.courseNumber[4][3] + ', '
      + this.state.courseNumber[4][4] + '\n'
      + 'Credits: ' + (this.state.courseCredits[4][0] + this.state.courseCredits[4][1] 
      + this.state.courseCredits[4][2] + this.state.courseCredits[4][3] 
      + this.state.courseCredits[4][4]) + '\n\n'
      + 'Semester 6: ' + this.state.courseNumber[5][0] + ', '
      + this.state.courseNumber[5][1] + ', '
      + this.state.courseNumber[5][2] + ', '
      + this.state.courseNumber[5][3] + ', '
      + this.state.courseNumber[5][4] + '\n'
      + 'Credits: ' + (this.state.courseCredits[5][0] + this.state.courseCredits[5][1] 
      + this.state.courseCredits[5][2] + this.state.courseCredits[5][3] 
      + this.state.courseCredits[5][4]) + '\n\n'
      + 'Semester 7: ' + this.state.courseNumber[6][0] + ', '
      + this.state.courseNumber[6][1] + ', '
      + this.state.courseNumber[6][2] + ', '
      + this.state.courseNumber[6][3] + ', '
      + this.state.courseNumber[6][4] + '\n'
      + 'Credits: ' + (this.state.courseCredits[6][0] + this.state.courseCredits[6][1] 
      + this.state.courseCredits[6][2] + this.state.courseCredits[6][3] 
      + this.state.courseCredits[6][4]) + '\n\n'  
      + 'Semester 8: ' + this.state.courseNumber[7][0] + ', '
      + this.state.courseNumber[7][1] + ', '
      + this.state.courseNumber[7][2] + ', '
      + this.state.courseNumber[7][3] + ', '
      + this.state.courseNumber[7][4] + '\n'
      + 'Credits: ' + (this.state.courseCredits[7][0] + this.state.courseCredits[7][1] 
      + this.state.courseCredits[7][2] + this.state.courseCredits[7][3] 
      + this.state.courseCredits[7][4]);
    const account = '';
    const token = '';

    let hash = Base64.encode( `${account}:${token}` );

    let form = new FormData();
    form.append( 'From', '+14154888651' );
    form.append( 'Body', message );
    form.append( 'To', phoneNumber ); //send to post author
    //console.log(phoneNumber);

    fetch( `https://api.twilio.com/2010-04-01/Accounts/${account}/Messages.json`, {
        method: 'POST',
        headers: {
        'Authorization': `Basic ${hash}`
        }, 
        body: form
    } )
    .then( ( response ) => response.json() )
    .then( ( data ) => {
        //console.log( data );
    } );
  }

  handleSubmit(event) {
    event.preventDefault();

    this.sendText(this.state.phoneNumber);
  }
  
  render () {
    const {
      phoneNumber,
      courseNumber,
      courseCredits
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <CHeader/>
          <br/>
          <br/>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Button Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <Container>
            <Row style={{backgroundColor: '#6692f2'}}>
              <Col>
              </Col>
              <Col>
                Semester
              </Col>
              <Col>
                Course 1
              </Col>
              <Col>
                Course 2
              </Col>
              <Col>
                Course 3
              </Col>
              <Col>
                Course 4
              </Col>
              <Col>
                Course 5
              </Col>
              <Col>
                Credits
              </Col>
            </Row>
            <Row style={{backgroundColor: '#81a6f7'}}>
              <Col>
                <br/>
                <SemesterModal buttonLabel="Edit" requirements={["a", "b", "c"]}/>
              </Col>
              <Col>
                Semester 1
              </Col>
              <Col>
                {courseNumber[0][0]}
                <br/>
                {courseCredits[0][0]} credits
              </Col>
              <Col>
                {courseNumber[0][1]}
                <br/>
                {courseCredits[0][1]} credits
              </Col>
              <Col>
                {courseNumber[0][2]}
                <br/>
                {courseCredits[0][2]} credits
              </Col>
              <Col>
                {courseNumber[0][3]}
                <br/>
                {courseCredits[0][3]} credits
              </Col>
              <Col>
                {courseNumber[0][4]}
                <br/>
                {courseCredits[0][4]} credits
              </Col>
              <Col>
                {courseCredits[0][0] + courseCredits[0][1] 
                  + courseCredits[0][2] + courseCredits[0][3] 
                  + courseCredits[0][4]} Credits
              </Col>
            </Row>
            <Row style={{backgroundColor: '#6692f2'}}>
              <Col>
                <br/>
                <SemesterModal buttonLabel="Edit" requirements={["a", "b", "c"]}/>
              </Col>
              <Col>
                Semester 2
              </Col>
              <Col>
                {courseNumber[1][0]}
                <br/>
                {courseCredits[1][0]} credits
              </Col>
              <Col>
                {courseNumber[1][1]}
                <br/>
                {courseCredits[1][1]} credits
              </Col>
              <Col>
                {courseNumber[1][2]}
                <br/>
                {courseCredits[1][2]} credits
              </Col>
              <Col>
                {courseNumber[1][3]}
                <br/>
                {courseCredits[1][3]} credits
              </Col>
              <Col>
                {courseNumber[1][4]}
                <br/>
                {courseCredits[1][4]} credits
              </Col>
              <Col>
              {courseCredits[1][0] + courseCredits[1][1] 
                  + courseCredits[1][2] + courseCredits[1][3] 
                  + courseCredits[1][4]} Credits
              </Col>
            </Row>
            <Row style={{backgroundColor: '#81a6f7'}}>
              <Col>
                <br/>
                <SemesterModal buttonLabel="Edit" requirements={["a", "b", "c"]}/>
              </Col>
              <Col>
                Semester 3
              </Col>
              <Col>
                {courseNumber[2][0]}
                <br/>
                {courseCredits[2][0]} credits
              </Col>
              <Col>
                {courseNumber[2][1]}
                <br/>
                {courseCredits[2][1]} credits
              </Col>
              <Col>
                {courseNumber[2][2]}
                <br/>
                {courseCredits[2][2]} credits
              </Col>
              <Col>
                {courseNumber[2][3]}
                <br/>
                {courseCredits[2][3]} credits
              </Col>
              <Col>
                {courseNumber[2][4]}
                <br/>
                {courseCredits[2][4]} credits
              </Col>
              <Col>
              {courseCredits[2][0] + courseCredits[2][1] 
                  + courseCredits[2][2] + courseCredits[2][3] 
                  + courseCredits[2][4]} Credits
              </Col>
            </Row>
            <Row style={{backgroundColor: '#6692f2'}}>
              <Col>
                <br/>
                <SemesterModal buttonLabel="Edit" requirements={["a", "b", "c"]}/>
              </Col>
              <Col>
                Semester 4
              </Col>
              <Col>
                {courseNumber[3][0]}
                <br/>
                {courseCredits[3][0]} credits
              </Col>
              <Col>
                {courseNumber[3][1]}
                <br/>
                {courseCredits[3][1]} credits
              </Col>
              <Col>
                {courseNumber[3][2]}
                <br/>
                {courseCredits[3][2]} credits
              </Col>
              <Col>
                {courseNumber[3][3]}
                <br/>
                {courseCredits[3][3]} credits
              </Col>
              <Col>
                {courseNumber[3][4]}
                <br/>
                {courseCredits[3][4]} credits
              </Col>
              <Col>
              {courseCredits[3][0] + courseCredits[3][1] 
                  + courseCredits[3][2] + courseCredits[3][3] 
                  + courseCredits[3][4]} Credits
              </Col>
            </Row>
            <Row style={{backgroundColor: '#81a6f7'}}>
              <Col>
                <br/>
                <SemesterModal buttonLabel="Edit" requirements={["a", "b", "c"]}/>
              </Col>
              <Col>
                Semester 5
              </Col>
              <Col>
                {courseNumber[4][0]}
                <br/>
                {courseCredits[4][0]} credits
              </Col>
              <Col>
                {courseNumber[4][1]}
                <br/>
                {courseCredits[4][1]} credits
              </Col>
              <Col>
                {courseNumber[4][2]}
                <br/>
                {courseCredits[4][2]} credits
              </Col>
              <Col>
                {courseNumber[4][3]}
                <br/>
                {courseCredits[4][3]} credits
              </Col>
              <Col>
                {courseNumber[4][4]}
                <br/>
                {courseCredits[4][4]} credits
              </Col>
              <Col>
              {courseCredits[4][0] + courseCredits[4][1] 
                  + courseCredits[4][2] + courseCredits[4][3] 
                  + courseCredits[4][4]} Credits
              </Col>
            </Row>
            <Row style={{backgroundColor: '#6692f2'}}>
              <Col>
                <br/>
                <SemesterModal buttonLabel="Edit" requirements={["a", "b", "c"]}/>
              </Col>
              <Col>
                Semester 6
              </Col>
              <Col>
                {courseNumber[5][0]}
                <br/>
                {courseCredits[5][0]} credits
              </Col>
              <Col>
                {courseNumber[5][1]}
                <br/>
                {courseCredits[5][1]} credits
              </Col>
              <Col>
                {courseNumber[5][2]}
                <br/>
                {courseCredits[5][2]} credits
              </Col>
              <Col>
                {courseNumber[5][3]}
                <br/>
                {courseCredits[5][3]} credits
              </Col>
              <Col>
                {courseNumber[5][4]}
                <br/>
                {courseCredits[5][4]} credits
              </Col>
              <Col>
              {courseCredits[5][0] + courseCredits[5][1] 
                  + courseCredits[5][2] + courseCredits[5][3] 
                  + courseCredits[5][4]} Credits
              </Col>
            </Row>
            <Row style={{backgroundColor: '#81a6f7'}}>
              <Col>
                <br/>
                <SemesterModal buttonLabel="Edit" requirements={["a", "b", "c"]}/>
              </Col>
              <Col>
                Semester 7
              </Col>
              <Col>
                {courseNumber[6][0]}
                <br/>
                {courseCredits[6][0]} credits
              </Col>
              <Col>
                {courseNumber[6][1]}
                <br/>
                {courseCredits[6][1]} credits
              </Col>
              <Col>
                {courseNumber[6][2]}
                <br/>
                {courseCredits[6][2]} credits
              </Col>
              <Col>
                {courseNumber[6][3]}
                <br/>
                {courseCredits[6][3]} credits
              </Col>
              <Col>
                {courseNumber[6][4]}
                <br/>
                {courseCredits[6][4]} credits
              </Col>
              <Col>
              {courseCredits[6][0] + courseCredits[6][1] 
                  + courseCredits[6][2] + courseCredits[6][3] 
                  + courseCredits[6][4]} Credits
              </Col>
            </Row>
            <Row style={{backgroundColor: '#6692f2'}}>
              <Col>
                <br/>
                <SemesterModal buttonLabel="Edit" requirements={["a", "b", "c"]}/>
              </Col>
              <Col>
                Semester 8
              </Col>
              <Col>
                {courseNumber[7][0]}
                <br/>
                {courseCredits[7][0]} credits
              </Col>
              <Col>
                {courseNumber[7][1]}
                <br/>
                {courseCredits[7][1]} credits
              </Col>
              <Col>
                {courseNumber[7][2]}
                <br/>
                {courseCredits[7][2]} credits
              </Col>
              <Col>
                {courseNumber[7][3]}
                <br/>
                {courseCredits[7][3]} credits
              </Col>
              <Col>
                {courseNumber[7][4]}
                <br/>
                {courseCredits[7][4]} credits
              </Col>
              <Col>
              {courseCredits[7][0] + courseCredits[7][1] 
                  + courseCredits[7][2] + courseCredits[7][3] 
                  + courseCredits[7][4]} Credits
              </Col>
            </Row>
          </Container>
          <br/>
          <Form onSubmit={this.handleSubmit}>
            <Button style={{backgroundColor: "#d66113"}} type="submit" size="lg">Send Schedule to: </Button>
            <Input type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={this.handleChange} placeholder="+12345678901"/>
          </Form>
          <br/>
          <br/>
        </header>
      </div>
    );
  }
}