import React from 'react';
import './App.css';
import CHeader from './components/CustomHeader.js'
import {Button} from 'reactstrap';
import ModalExample from './components/ModalExample.js'
import RequirementModal from './components/RequirementModal.js'
import {Container, Row, Col} from 'react-bootstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "EP3PO",
      programs: {}
    };
  }

  sendText(name) {
    // var Base64 = require('js-base64').Base64;
    // let message = 'Hello ' + name;
    // const account = 'AC8958e14b6120c8f3342812c4cdda594e';
    // const token = 'e14286eeb3f4a4eb47c1c0ab5b7dd5ff';

    // let hash = Base64.encode( `${account}:${token}` );

    // let form = new FormData();
    // form.append( 'From', '+14154888651' );
    // form.append( 'Body', message );
    // form.append( 'To', '+15157201611' ); //send to post author

    // fetch( `https://api.twilio.com/2010-04-01/Accounts/${account}/Messages.json`, {
    //     method: 'POST',
    //     headers: {
    //     'Authorization': `Basic ${hash}`
    //     }, 
    //     body: form
    // } )
    // .then( ( response ) => response.json() )
    // .then( ( data ) => {
    //     console.log( data );
    // } );
  }
  
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <CHeader/>
          <RequirementModal semester_year="1986" semester_season="Spring"/>
          <br/>
          <Button color="info" onClick={this.sendText(this.state.name)} size="lg">Send Text</Button>
          <Container>
            <Row>
              <Col>

              </Col>
            </Row>
          </Container>
          <br/>
          <br/>
        </header>
      </div>
    );
  }
}
