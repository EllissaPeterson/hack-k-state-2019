import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {getSemesterSeason, getSemesterYear, getNameOfClass, getShortNameOfClass, getClassDescription} from './SharedFunctions.js'

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

  return (
    <div>
    {console.log(course)}
    <Button color="danger" onClick={toggle} size="lg">{getShortNameOfClass(course)}</Button>
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
          <Button color="primary" onClick={toggle}>Add</Button>{' '} {/*TODO make this work*/}
          <Button color="secondary" onClick={toggle}>Back</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddSelectedCourseModal;
