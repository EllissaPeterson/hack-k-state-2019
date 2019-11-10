import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {getNameOfDepartment, getCoursesGivenDepartment} from './SharedFunctions.js';
import AddNewCourseModal from './AddNewCourseModal.js';
const DepartmentModal = (props) => {
  const {
    department,
    semester,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const buttonstyle = {
    backgroundColor: "#d66113",
    //"backgroundColor":"#54c759",
    "margin-top":"-55px",
    "margin-bottom":"-20px",
    //"border":"none",
    //"margin":"-20px"
    //"padding":"0px"
  }



  return (
    <div>
      <Button style={buttonstyle} onClick={toggle} size="md">{getNameOfDepartment(department)}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
          <br/>
          <br/>
        <ModalHeader toggle={toggle}>{getNameOfDepartment(department)}</ModalHeader>
        <ModalBody>
          {getCoursesGivenDepartment(department).map((course)=>
            <div>
              <AddNewCourseModal course={course} semester={semester}/> <br/>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="Secondary" onClick={toggle}>Back</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DepartmentModal;
