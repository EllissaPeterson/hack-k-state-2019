import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {getNameOfRequirement, getNameOfClass, getClasses} from './SharedFunctions'


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