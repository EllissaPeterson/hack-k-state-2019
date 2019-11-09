import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {getSemesterSeason, getSemesterYear, getNameOfClass, getClassDescription, removeClass} from './SharedFunctions.js'

function removeAndToggle(toToggle, course)
{
    removeClass(course);
    toToggle.Modal('toggle');
}

const ViewSelectedCourseModal = (props) => {
  const {
    buttonLabel,
    semester,
    course,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
    <Button color="danger" onClick={toggle} size="lg">{getNameOfClass(course)}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
          <br/>
          <br/>
        <ModalHeader toggle={toggle}>{getSemesterSeason(semester)} {getSemesterYear(semester)}: {getNameOfClass(course)}</ModalHeader>
        <ModalBody>
          {getClassDescription(course)}
        </ModalBody>
        <ModalFooter>
            {console.log(this)}
          <Button color="danger" onClick={removeAndToggle(this, course)}>Remove</Button>{' '}
          <Button color="secondary" onClick={toggle}>Back</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ViewSelectedCourseModal;