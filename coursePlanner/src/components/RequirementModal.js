import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const RequirementModal = (props) => {
  const {
    buttonLabel,
    requirements,
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
        <ModalHeader toggle={toggle}>Requirements Remaining</ModalHeader>
        <ModalBody>
          {requirements.map((n)=>
            <div>
              <RequirementModal buttonLabel={n} requirements={requirements}/> <br/> {/*TODO: Change this to something that makes sense in this context.*/}
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

export default RequirementModal;