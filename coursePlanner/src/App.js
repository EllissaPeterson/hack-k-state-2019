import React from 'react';
import './App.css';
import CHeader from './components/CustomHeader.js'
import {Button, Input, Form} from 'reactstrap';
import ModalExample from './components/ModalExample.js'
import RequirementModal from './components/RequirementModal.js'
import {Container, Row, Col} from 'react-bootstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  sendText(phoneNumber) {
    var Base64 = require('js-base64').Base64;
    let message = 'Beep beep boop boop';
    const account = 'AC8958e14b6120c8f3342812c4cdda594e';
    const token = 'e14286eeb3f4a4eb47c1c0ab5b7dd5ff';

    let hash = Base64.encode( `${account}:${token}` );

    let form = new FormData();
    form.append( 'From', '+14154888651' );
    form.append( 'Body', message );
    form.append( 'To', phoneNumber ); //send to post author
    console.log(phoneNumber);

    fetch( `https://api.twilio.com/2010-04-01/Accounts/${account}/Messages.json`, {
        method: 'POST',
        headers: {
        'Authorization': `Basic ${hash}`
        }, 
        body: form
    } )
    .then( ( response ) => response.json() )
    .then( ( data ) => {
        console.log( data );
    } );
  }

  handleSubmit(event) {
    event.preventDefault();

    this.sendText(this.state.phoneNumber);
  }
  
  render () {
    const {
      phoneNumber
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <CHeader/>
          <br/>
          <br/>
          <Container>
            <Row>
              <Col>
                <ModalExample buttonLabel="Modal"/>
              </Col>
              <Col>
                Semester
              </Col>
              <Col>
                course 1
              </Col>
              <Col>
                course 2
              </Col>
              <Col>
                course 3
              </Col>
              <Col>
                course 4
              </Col>
              <Col>
                course 5
              </Col>
              <Col>
                Credits
              </Col>
            </Row>
            <Row>
              <Col>
                <RequirementModal buttonLabel="Requirement" requirements={["a", "b", "c"]}/>
              </Col>
              <Col>
                Semester 1
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                Credits
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>
                Semester 2
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                Credits
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>
                Semester 3
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                Credits
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>
                Semester 4
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                Credits
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>
                Semester 5
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                Credits
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>
                Semester 6
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                Credits
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>
                Semester 7
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                Credits
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>
                Semester 8
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                number
                credits
              </Col>
              <Col>
                Credits
              </Col>
            </Row>
          </Container>
          <Form onSubmit={this.handleSubmit}>
            <Input type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={this.handleChange} placeholder="+12345678901"/>
            <Button color="info" type="submit" size="lg">Send Schedule to: </Button>
          </Form>
          <br/>
          <br/>
        </header>
      </div>
    );
  }
}