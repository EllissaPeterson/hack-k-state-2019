import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {getRemainingDepartments, getSemesterSeason, getSemesterYear, getCoursesInSemester, getNameOfDepartment} from './SharedFunctions.js'
import ViewSelectedCourseModal from './ViewSelectedCourseModal.js';

const SemesterModal = (props) => {
  const {
    semester,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle} size="lg">Schedule{getSemesterSeason(semester)} {getSemesterYear(semester)}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
          <br/>
          <br/>
        <ModalHeader toggle={toggle}>{getSemesterSeason(semester)} {getSemesterYear(semester)}</ModalHeader>
        <ModalBody>
        <div class="left_aligned">
            <i>Add a class</i><br/>
            {getRemainingDepartments().map((department)=>
                <div>
                    <Button color="danger" onClick={toggle} size="lg">{getNameOfDepartment(department)}</Button><br/><br/>
                </div>
            )}
        </div>
        
        <i class="right_aligned">Current Classes for {getSemesterSeason(semester)} {getSemesterYear(semester)}</i><br/>
        <div class="right_aligned">
            
            {getCoursesInSemester(semester).map((course)=>
                <div>
                    <ViewSelectedCourseModal semester={semester} course={course}/> <br/>
                </div>
            )}
        </div>

          
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Done</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SemesterModal;