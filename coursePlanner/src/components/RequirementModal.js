import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ClassModal from './ClassModal.js'
import {getNameOfRequirement, getRemainingRequirements} from './SharedFunctions.js'

const RequirementModal = (props) => {
  const {
    buttonLabel,
    semester_year,
    semester_season,
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
        <ModalHeader toggle={toggle}>{semester_season} {semester_year}: Requirements Remaining</ModalHeader>
        <ModalBody>
          {getRemainingRequirements().map((n)=>
            <div>
              <ClassModal buttonLabel={getNameOfRequirement(n)} requirement_to_satisfy={n}/> <br/> {/*TODO: Change this to something that makes sense in this context.*/}
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Done</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default RequirementModal;