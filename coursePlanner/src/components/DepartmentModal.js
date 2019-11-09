import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ClassModal from './ClassModal.js'
import {getNameOfDepartment, getCoursesGivenDepartment, getNameOfClass} from './SharedFunctions.js'
import AddNewCourseModal from './AddNewCourseModal'
const DepartmentModal = (props) => {
  const {
    department,
    semester,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button style={{backgroundColor: "#d66113"}} onClick={toggle} size="lg">{getNameOfDepartment(department)}</Button>
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