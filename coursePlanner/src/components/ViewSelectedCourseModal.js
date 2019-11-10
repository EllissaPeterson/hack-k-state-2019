import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import {getSemesterSeason, getSemesterYear, getNameOfClass, getShortNameOfClass, getClassDescription, removeClass} from './SharedFunctions.js'



const ViewSelectedCourseModal = (props) => {
  const {
    semester,
    course,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  var course_name = "zsdfsdfzsdf";
  getNameOfClass(course).then((_course_name) => (course_name = _course_name));
  console.log(course_name);
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
          {getClassDescription(course)}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={removeClass}><a onClick={toggle} >Remove</a></Button>{' '} {/*TODO make this work*/}
          <Button color="secondary" onClick={toggle}>Back</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ViewSelectedCourseModal;
