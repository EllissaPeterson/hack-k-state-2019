import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {getSemesterSeason, getSemesterYear, getNameOfClass, getShortNameOfClass, getClassDescription, addClass} from './SharedFunctions.js'

const AddSelectedCourseModal = (props) => {
  const {
    semester,
    course,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const pstyle = {
    'white-space':'pre-line'
  }

  const buttonstyle = {
    //backgroundColor: "#d66113",
    "margin-top":"0px",
    "margin-bottom":"-30px",
    //"padding":"0px",
    backgroundColor: "#d66113",
    //"backgroundColor":"#54c759"
  }

  return (
    <div>
    {console.log(course)}
    <Button style={buttonstyle} onClick={toggle} size="md">{getShortNameOfClass(course)}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
          <br/>

        <ModalHeader toggle={toggle}>
          {getSemesterSeason(semester)} {getSemesterYear(semester)}
          <br/>
          <br/>
          {getShortNameOfClass(course)}: {getNameOfClass(course)}
        </ModalHeader>
        <ModalBody>
          <p style={pstyle}>{getClassDescription(course)}</p>
        </ModalBody>
        <ModalFooter>
            {console.log(this)}
          <Button color="primary" onClick={toggle}><a onclick={addClass}>Add</a></Button>{' '} {/*TODO make this work*/}
          <Button color="secondary" onClick={toggle}>Back</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddSelectedCourseModal;
