import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {getSemesterSeason, getSemesterYear, getNameOfClass, getShortNameOfClass, getClassDescription} from './SharedFunctions.js'

const ViewSelectedCourseModal = (props) => {
  const {
    semester,
    course,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  // TODO put pstyle from this file and AddNewCourseModal in same file because this duplicated code is bad
  const pstyle = {
    'white-space':'pre-line'
  }

  return (
    <div>
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
          <Button color="danger" onClick={toggle}>Remove</Button>{' '} {/*TODO make this work*/}
          <Button color="secondary" onClick={toggle}>Back</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ViewSelectedCourseModal;
