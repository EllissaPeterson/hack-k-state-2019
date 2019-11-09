import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ClassModal from './ClassModal.js'

function getRemainingRequirements()
{
  //TODO: Make this do useful work.
  return [1,2,3,4,5];
}

function getNameOfRequirement(requirement_id)
{
  //TODO: Return the name of the requirement.
  return "Bruh Studies";
}

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