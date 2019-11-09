import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function getClasses(requirement_id)
{
  //TODO: Return an array of class ids that satisfy the requirements.
  return ["448", "682"]
}

function getNameOfRequirement(requirement_id)
{
  //TODO: Return the name of the requirement.
  return "Bruh Studies";
}

function getNameOfClass(class_id)
{
  //TODO: Return the name of the class
  return "Ya Bruh or Nah Bruh: Modern Bruh Culture"
}

const ClassModal = (props) => {
  const {
    requirement_to_satisfy,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle} size="lg">{getNameOfRequirement(requirement_to_satisfy)}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
          <br/>
          <br/>
        <ModalHeader toggle={toggle}>Select Classes: {getNameOfRequirement(requirement_to_satisfy)}</ModalHeader>
        <ModalBody>
          {getClasses(requirement_to_satisfy).map((n)=>
            <div>
              <Button color="danger" size="lg">{getNameOfClass(n)}</Button> <br/> <br/>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ClassModal;