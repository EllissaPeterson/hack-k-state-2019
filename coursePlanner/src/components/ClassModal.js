import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function getClasses(requirement)
{
  //TODO: Make this do useful work of getting required classes.
  return ["448", "682"]
}

const ClassModal = (props) => {
  const {
    buttonLabel,
    requirement_to_satisfy,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle} size="lg">{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
          <br/>
          <br/>
        <ModalHeader toggle={toggle}>Available Classes</ModalHeader>
        <ModalBody>
          {getClasses(requirement_to_satisfy).map((n)=>
            <div>
              <ClassModal buttonLabel={n}/> <br/>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>OK</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ClassModal;