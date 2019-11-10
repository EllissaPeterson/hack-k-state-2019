import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input } from 'reactstrap';
import {getRemainingDepartments, getSemesterSeason, getSemesterYear, getCoursesInSemester} from './SharedFunctions.js'
import ViewSelectedCourseModal from './ViewSelectedCourseModal.js';
import DepartmentModal from './DepartmentModal'

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
        <Form>
          <Label for="courseSearch">Course Search</Label>
          <Input type="text" name="text" id="courseSearch" placeholder="e.g. COM S 228" />
          <div class="center_aligned">
            <Button>Search</Button>
          </div>
        </Form>
        <br/>
        <div class="left_aligned">
            <i>Add a class</i><br/><br/>
            {getRemainingDepartments().map((department)=>
                <div>
                    <DepartmentModal semester={semester} department={department}/> <br/>
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
