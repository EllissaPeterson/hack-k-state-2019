import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ClassModal from './ClassModal.js'
import {getNameOfRequirement, getRemainingDepartments, getSemesterSeason, getSemesterYear, getCoursesInSemester, getNameOfDepartment} from './SharedFunctions.js'

const SemesterModal = (props) => {
  const {
    buttonLabel,
    semester,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button style={{backgroundColor: "#d66113"}} onClick={toggle} size="lg">{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
          <br/>
          <br/>
        <ModalHeader toggle={toggle}>{getSemesterSeason(semester)} {getSemesterYear(semester)}</ModalHeader>
        <ModalBody>
        <div class="left_aligned">
            <i>Add a class</i><br/>
            {getRemainingDepartments().map((department)=>
                <div>
                    <Button style={{backgroundColor: "#d66113"}} onClick={toggle} size="lg">{getNameOfDepartment(department)}</Button><br/><br/>
                </div>
            )}
        </div>
        
        <i class="right_aligned">Current Classes for {getSemesterSeason(semester)} {getSemesterYear(semester)}</i><br/>
        <div class="right_aligned">
            
            {getCoursesInSemester(semester).map((course)=>
                <div>
                    <ClassModal buttonLabel={getNameOfRequirement(course)} requirement_to_satisfy={course}/> <br/> {/*TODO: Change this to something that makes sense in this context.*/}
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