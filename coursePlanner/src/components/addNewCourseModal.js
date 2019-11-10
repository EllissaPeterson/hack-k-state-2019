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

  return (
    <div>
    {console.log(course)}
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
          <Button color="primary" onClick={toggle}>Add</Button>{' '} {/*TODO make this work*/}
          <Button color="secondary" onClick={toggle}>Back</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddSelectedCourseModal;
